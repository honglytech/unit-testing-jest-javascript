const object = require("../object");

test("User should return object", () => {
  expect(object.user()).toEqual({ name: "John", age: 18 });
});

describe("Filter function", () => {
  test("it should filter by a search term - link", () => {
    const input = [
      { id: 1, url: "https://www.url1.com" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.website.com" },
    ];

    const output = [{ id: 3, url: "https://www.website.com" }];

    expect(object.filterByTerm(input, "website")).toEqual(output);
    // expect(object.filterByTerm(input, "WEBSITE")).toEqual(output);
  });
});
