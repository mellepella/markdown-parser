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
  "#": (content) => {
    return Parser.createHeader(content)
  },
}