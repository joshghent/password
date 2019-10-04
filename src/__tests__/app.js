// import React from "react";
// import renderer from "react-test-renderer";
describe("App Suite", () => {
  let message;
  beforeEach(() => {
    message = "Hey! It works!!!";
  });

  test("Jest Works", () => {
    expect(message).toEqual("Hey! It works!!!");
  });
});
