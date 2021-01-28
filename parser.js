window.onload = () => {
  Parser.write();
}

class Parser {
  static parse(sentInContent) {
    const content = sentInContent || document.getElementById("input").value;
    let headerValue = 1;
    let charIndex = 0;
    const firstChar = content.charAt(charIndex);
    let rowContent = content;
    if (rowDictionary[firstChar]) {
      while(content.charAt(charIndex) === content.charAt(charIndex + 1)) {
        charIndex += 1;
        headerValue += 1;
      }
      rowContent = rowDictionary[firstChar](content, headerValue);
    }
    for (const prop in dictionary) {
      if(rowContent.includes(prop)) {
        while(rowContent !== this.replace(prop, rowContent)) {
          dictionary[prop].timesDiscovered += 1;
          rowContent = this.replace(prop, rowContent);
        }
      }
    }
    for (const word in dictionary) {
      dictionary[word].timesDiscovered = 0;
    }
      return `<p>${rowContent}</p>`;
  }

  static replace(letter, content) {
    let rowContent = content;
    if(dictionary.hasOwnProperty(letter)) {
      const timesDiscovered = dictionary[letter].timesDiscovered;
      if(!isEven(timesDiscovered)) {
        rowContent = rowContent.replace(letter, dictionary[letter].begin);
      } 
      else if(isEven(timesDiscovered)) {
        rowContent = rowContent.replace(letter, dictionary[letter].end);
      }
    }
    return rowContent;
  }

  static createHeader(content, headerValue) {
    
    let contentExcludedHashtag = content.split("");
    contentExcludedHashtag = contentExcludedHashtag.slice(
      headerValue,
      contentExcludedHashtag.length
    );
    contentExcludedHashtag = contentExcludedHashtag.join("");
    return `<h${headerValue}>${contentExcludedHashtag}</h${headerValue}>`;
  }

  static write() {
    document.getElementById("output").innerHTML = this.parse();
  }
}
