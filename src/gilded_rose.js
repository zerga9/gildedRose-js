class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}


class Shop {
  constructor(items=[]){
    this.items = items;
  }

  sulfuras(item) {
    item = item
  }

  agedBrie(item) {
    if (item.sellIn > 0){
      if (item.quality < 50){
        item.quality += 1;
      }
    }else if (item.sellIn <= 0){
        item.quality += 2;
      }
   item.sellIn -= 1;
 };

  backStagePasses(item) {
    if(item.sellIn <= 0){
      item.quality = 0;
    } else{
      item.quality += 1
      if (item.sellIn < 11){
      item.quality += 1
    }
      if (item.sellIn < 6){
        item.quality += 1;
      }
    }
    if (item.quality >= 50){
      item.quality = 50
     }
    }
    normalItem(item){
      if (item.sellIn < 0){
        item.quality > 0 && item.quality < 50 ? item.quality -= 1 : item.quality;
      } else {
        item.quality > 0 ? item.quality -= 2 : item.quality;
      }
      item.sellIn -=1;
    }

    conjuredItem(item){
      item.quality -= 2;
      item.sellIn -= 1;
    }


  updateQuality() {
    this.items.forEach((item) => {
      if (item.name == 'Sulfuras, Hand of Ragnaros'){
        this.sulfuras(item);
      } else if (item.name == 'Aged Brie'){
      this.agedBrie(item);
    } else if(item.name == 'Backstage passes to a TAFKAL80ETC concert'){
      this.backStagePasses(item);
      } else if(item.name =="Conjured Mana Cake") {
       this.conjuredItem(item);
      } else {
        this.normalItem(item);
      }
    });
    return this.items;
  }
}
