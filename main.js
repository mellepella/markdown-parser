const commandNames = {
  "#": (content) => {
    return Parser.header(content);
  },
  write: (content) => {
    document.body.innerHTML = content;
  },
};
