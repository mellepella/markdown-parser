class Parser {
  static parse(content) {
    const firstChar = content.charAt(0);

    if (commandNames[firstChar]) {
      console.log(`${commandNames[firstChar]}, ${content}`);
      return commandNames[firstChar](content);
    } else {
      return `<p>${content}</p>`;
    }
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
