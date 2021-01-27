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
        const timesDiscovered = dictionary[letters][2];
        dictionary[letters][2] += 1;

        if(timesDiscovered % 2 === 0) {
          rowContent = rowContent.replace(letters, dictionary[letters][0]);
        } else {
          rowContent = rowContent.replace(letters, dictionary[letters][1]);
        }
      }
    }
      console.log(rowContent);

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
