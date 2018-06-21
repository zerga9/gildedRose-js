describe("Gilded Rose", function() {

  var gildedRose;

  beforeEach(function() {
    gildedRose = new Shop();
  });

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("the quality of an item is never negative", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("Aged Brie increases in quality the older it gets", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThan(0);
  });

  it("quality Aged Brie never more than 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("quality Backstage passes never more than 50", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("quality Backstage passes increases by 2 when between 10 and 5 days", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(12);
  });

  it("quality Backstage passes increases by 3 when between 5 and 0 days", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(13);
  });

  it("Sulfuras never decreases in quality", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(40);
  });

  it("Once sell by date passes, quality degrades twice as fast", function() {
    const gildedRose = new Shop([new Item("foo", 0, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(4);
  });
});
