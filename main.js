const dictionary = {
  "#": (content) => {
    return Parser.createHeader(content)
  },
  "**": {
    "begin": "<strong>",
    "end": "</strong>",
    "timesDiscovered": 0,
  }
};