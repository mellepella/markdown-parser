class Parser {
  static parse(content) {
    const firstChar = content.charAt(0);
    let rowContent = content;

    if (dictionary[firstChar]) {
      rowContent = dictionary[firstChar](content);
    }
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

    for (const word in dictionary) {
      dictionary[word].timesDiscovered = 0;
    }
      return `<p>${rowContent}</p>`;
  }

  static header(content) {
    let contentExcludedHashtag = content.split("");
    contentExcludedHashtag = contentExcludedHashtag.slice(
      1,
      contentExcludedHashtag.length
    );
    contentExcludedHashtag = contentExcludedHashtag.join("");
    return `<h1>${contentExcludedHashtag}</h1>`;
  }
}
