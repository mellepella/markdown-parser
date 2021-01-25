assertEqual(Parser.parse("Content"), "<p>Content</p>", "Forms a <p> tag");
assertEqual(Parser.header("#Content"), "<h1>Content</h1>", "Forms a <h1> tag.");
assertEqual(Parser.parse("#Content"), "<h1>Content</h1>", "Forms a <h1> tag.");

function assertEqual(actual, expected, description = "") {
  console.group(description);

  if (expected !== actual) {
    console.error(`Expected: "${expected}". Actual: "${actual}"`);
  } else {
    console.log(`Test successful. (Expected: "${expected}")`);
  }

  console.groupEnd();
}
