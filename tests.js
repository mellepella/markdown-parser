assertEqual(Parser.parse("Content"), "<p>Content</p>", "Forms a <p> tag");
assertEqual(Parser.parse("#Content"), "<p><h1>Content</h1></p>", "Forms a <h1> tag.");
assertEqual(Parser.parse("This is **Content**"), "<p>This is <strong>Content</strong></p>", "Forms a <strong> tag.");
assertEqual(Parser.parse("#**This** is **content**"), "<p><h1><strong>This</strong> is <strong>content</strong></h1></p>", "Forms a <strong tag within a header");


function assertEqual(actual, expected, description = "") {
  console.group(description);

  if (expected !== actual) {
    console.error(`Expected: "${expected}". Actual: "${actual}"`);
  } else {
    console.log(`Test successful. (Expected: "${expected}")`);
  }

  console.groupEnd();
}
