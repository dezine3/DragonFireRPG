// Test for locations array
describe("locations", () => {
  it("should have the correct structure", () => {
    expect(locations).toBeInstanceOf(Array);
    expect(locations.length).toBeGreaterThan(0);

    locations.forEach((location) => {
      expect(location).toHaveProperty("name");
      expect(location).toHaveProperty("button text");
      expect(location).toHaveProperty("button functions");
      expect(location).toHaveProperty("text");
    });
  });
});