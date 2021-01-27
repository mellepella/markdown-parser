const dictionary = {
  "#": (content) => {
    return Parser.header(content)
  },
  "**": {
    "begin": "<strong>",
    "end": "</strong>",
    "timesDiscovered": 0,
  }
};