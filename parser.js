class Parser {
  static write() {
    document.getElementById("output").innerHTML = this.parse();
  }

  static replace(letter, content) {
    let rowContent = content;
    if(dictionary.hasOwnProperty(letter)) {
      const timesDiscovered = dictionary[letter].timesDiscovered;
      if(isEven(timesDiscovered)) {
        rowContent = rowContent.replace(letter, dictionary[letter].begin);
      } 
      else if(!isEven(timesDiscovered)) {
        rowContent = rowContent.replace(letter, dictionary[letter].end);
      }
    }
    return rowContent;
  }
  
  static parse(sentInContent) {
    const content = sentInContent || document.getElementById("input").value;
    
    //Check for # (header)
    const firstChar = content.charAt(0);
    let rowContent = content;
    if (rowDictionary[firstChar]) {
      rowContent = rowDictionary[firstChar](content);
    }
    
    for (const prop in dictionary) {
      console.log("Prop:" + prop);
      if(rowContent.includes(prop)) {
        while(rowContent !== this.replace(prop, rowContent)) {
          rowContent = this.replace(prop, rowContent);
          dictionary[prop].timesDiscovered += 1;
        }
      }
    }

    //Change timesDiscovered to 0 on all props in dictionary
    for (const word in dictionary) {
      dictionary[word].timesDiscovered = 0;
    }
      return `<p>${rowContent}</p>`;
  }

  static createHeader(content) {
    let contentExcludedHashtag = content.split("");
    contentExcludedHashtag = contentExcludedHashtag.slice(
      1,
      contentExcludedHashtag.length
    );
    contentExcludedHashtag = contentExcludedHashtag.join("");
    return `<h1>${contentExcludedHashtag}</h1>`;
  }
}
