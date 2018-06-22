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
    var daysLeft = [5,10]
    if(item.sellIn <= 0){
      item.quality = 0;
    } else{
        item.quality += 1
        daysLeft.forEach(function(days){
          if (item.sellIn <= days){
            item.quality += 1
          }
        })
        if (item.quality >= 50){
          item.quality = 50
        }
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
      switch(item.name){
        case('Sulfuras, Hand of Ragnaros'):
          this.sulfuras(item);
          break;
        case('Aged Brie'):
          this.agedBrie(item);
          break;
        case('Backstage passes to a TAFKAL80ETC concert'):
          this.backStagePasses(item);
          break;
        case("Conjured Mana Cake"):
          this.conjuredItem(item);
          break;
        default:
          this.normalItem(item)
       }
    });
    return this.items;
  }
}
