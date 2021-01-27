const dictionary = {
  "#": (content) => {
    return Parser.header(content)
  },
  "**": ["<strong>", "</strong>", 0]
};