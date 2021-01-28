const dictionary = {
  "**": {
    "begin": "<strong>",
    "end": "</strong>",
    "timesDiscovered": 0,
  },
  "*": {
    "begin": "<i>",
    "end": "</i>",
    "timesDiscovered": 0,
  }
};

const rowDictionary = {
  "#": (content, headerValue) => {
    return Parser.createHeader(content, headerValue)
  },
}