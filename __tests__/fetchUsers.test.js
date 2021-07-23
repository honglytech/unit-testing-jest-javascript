const fetchUsers = require("../fetchUsers");

test("Username should return Bret", async () => {
  const data = await fetchUsers();
  //   console.log(data);
  expect(data[0].username).toEqual("Bret");
});
