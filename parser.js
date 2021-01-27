class Parser {
  static write() {
    document.getElementById("output").innerHTML = this.parse();
  }
  
  static parse(sentInContent) {
    const content = sentInContent || document.getElementById("input").value;

    //Check for # (header)
    const firstChar = content.charAt(0);
    let rowContent = content;
    if (dictionary[firstChar]) {
      rowContent = dictionary[firstChar](content);
    }

    //Check for other symbols and replace with tags
    for (const letter of rowContent) {
      const letters = letter + letter;
      if(dictionary.hasOwnProperty(letters)) {
        const timesDiscovered = dictionary[letters].timesDiscovered;
        dictionary[letters].timesDiscovered += 1;
        if(isEven(timesDiscovered)) {
          rowContent = rowContent.replace(letters, dictionary[letters].begin);
        } else {
          rowContent = rowContent.replace(letters, dictionary[letters].end);
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
