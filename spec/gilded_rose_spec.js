describe("Gilded Rose", function() {

  var gildedRose;

  beforeEach(function() {
    gildedRose = new Shop();
    items = gildedRose.updateQuality();
  });

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("the quality of an item is never negative", function() {
    var item = new Item("foo", 0, 0);
    gildedRose.items.push(item);
    expect(items[0].quality).toBe(0);
  });

});
