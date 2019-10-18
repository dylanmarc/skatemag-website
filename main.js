

function searchArticles() {
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("article-list");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    content = li[i].getElementsByClassName("article-content")[0];
    txtValue = content.textContent || content.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


const itemList = [
  {
   image: "https://cdn.shopify.com/s/files/1/0475/5337/products/gx1000-hood-og-logo-gunmetal-grey_1024x1024@2x.JPG?v=1561626873",
   name: "GX1000 Hoodie",
   price: 100,
   type: "hoodie",
   age: 1
  },
  {
   image: "https://tshop.r10s.jp/w5thst/cabinet/st/spitfire-st015-1.jpg?fitin=330:330",
   name: "Spitfire Sticker",
   price: 5,
   type: "sticker",
   age: 8
  },
  {
   image: "https://shop.thrashermagazine.com/media/catalog/product/cache/301a51e782445bc103c520dcfd95f60f/t/h/thrasher_flame_black_shirt_web_650px_2.jpg",
   name: "Thrasher T-Shrit",
   price: 40,
   type: "shirt",
   age: 4
  },
  {
   image: "https://images.blue-tomato.com/is/image/bluetomato/303492209_front.jpg-7qsnaug8bWKM5EHfEVbVM27zMbM/Lord+Nermal+Board+8+25+Skate+Deck.jpg?$b8$",
   name: "Rude Cat Deck",
   price: 80,
   type: "deck",
   age: 3
  },
  {
   image: "https://routeone.images.blucommerce.com/routeone/product/00108/001082712.jpg?auto=format%2Ccompress&bluhash=9385c2f3b38ab697a7b881725ee99f2a&w=534&h=681&fit=crop&s=17b879a4d836bee195bf23d36df3cf7a",
   name: "Zero Deck",
   price: 85,
   type: "deck",
   age: 7
  },
  {
   image: "https://cms.gtp-icommerce.com.au/clients/s/surfsailaustralia/largeimages/539544.jpg",
   name: "Element Deck",
   price: 90,
   type: "deck",
   age: 9
  },
  {
   image: "https://skateparkoftampa.com/spot/productimages/colors/6_74084.jpg",
   name: "Dime Cap",
   price: 75,
   type: "hat",
   age: 2
  },
  {
   image: "https://scene7.zumiez.com/is/image/zumiez/Zoom_PDP/DC-Pure-XE-Black-%26-Athletic-Red-Suede-Skate-Shoes-_205292-0001-front.jpg",
   name: "DC Shoes",
   price: 65,
   type: "shoe",
   age: 3
  },
  {
   image: "https://images.blue-tomato.com/is/image/bluetomato/303670760_front.jpg-Cpy_rCtlBp4Ub5OPiJPQ7TWYB40/Style+112+Pro+Skate+Shoes.jpg?$b8$",
   name: "Vans Pro Skates",
   price: 95,
   type: "shoe",
   age: 4
  },
  {
  image: "https://cdn.skatedeluxe.com/images/product_images/200px2x/121161-0-NikeSB-xOrangeLabelZoomBruinIso.jpg",
  name: "NikeSB Orange",
  price: 110,
  type: "shoe",
  age: 2
  },
  {
  image: "https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Thrasher-Boys-Flame-Logo-Black-Hoodie-_275830.jpg",
  name: "Thrasher Hoodie",
  price: 120,
  type: "hoodie",
  age: 7
  },
  {
  image: "https://cdn.shopify.com/s/files/1/0467/0509/products/Green-Blue-Stacked_grande.jpg?v=1547622936",
  name: "Death Wish Tee",
  price: 60,
  type: "shirt",
  age: 10
  },
  {
  image: "http://cdn.companybe.com/35thNorth/product_photos/rd_images/rd_polarcanvascapblue.jpg",
  name: "Polar Cap (Blue)",
  price: 50,
  type: "hat",
  age: 1
  },
  {
  image: "https://skatehut.images.blucommerce.com/skatehut/product/emerica-pure-snapback-cap-navy-red.jpg?auto=format%2Ccompress&bluhash=8277ff35b901d6d76dcde2d5291735ee&w=750&h=750&fit=fillmax&fill=solid&s=01f11ebf02e35973067041867b6d0588",
  name: "Emerica Snapback",
  price: 40,
  type: "hat",
  age: 3
  },
];

window.onload = function(){window.document.body.onload = displayShop(itemList);}

function displayShop(itemList){
  let itemArray = itemList;
  let text = `<ul id='shop-list'>`;
  for(i=0; itemArray.length > i; i++){
    if(i == 0){
      text += `<div class='shop-row'><li class='shop-item' style='background: url(`+itemArray[i].image+`); background-size: cover;'><div class='shop-txt'><h1>`+itemArray[i].name+`</h1>`+`<h2>$`+itemArray[i].price+`</h2></div></li>`;
    }else if(i % 3 == 0){
      text += `</div><div class='shop-row'><li class='shop-item' style='background: url(`+itemArray[i].image+`); background-size: cover;'><div class='shop-txt'><h1>`+itemArray[i].name+`</h1>`+`<h2>$`+itemArray[i].price+`</h2></div></li>`;
    }else{
      text += `<li class='shop-item' style='background: url(`+itemArray[i].image+`); background-size: cover;'><div class='shop-txt'><h1>`+itemArray[i].name+`</h1>`+`<h2>$`+itemArray[i].price+`</h2></div></li>`;
    }
  }
  text += `</ul>`

  document.getElementsByClassName("middle")[0].innerHTML = text;
}

  let sorted = 0;
function priceSort(itemList){
  if(sorted == 0){
  itemList.sort(function(a, b){return a.price - b.price;});
  document.getElementById('price').innerHTML = '<h2>Price</h2><br><p>(Low > High)</p>';
  sorted = 1;
}else{
  itemList.sort(function(a, b){return b.price - a.price;});
  document.getElementById('price').innerHTML = '<h2>Price</h2><br><p>(High > Low)</p>';
  sorted = 0;
  }
  displayShop(itemList);
}

function ageSort(itemList){
  document.getElementById('price').innerHTML = '<h2>Price</h2>';
  if(sorted == 0){
  itemList.sort(function(a, b){return a.age - b.age;});
  sorted = 1;
}else{
  itemList.sort(function(a, b){return b.age - a.age;});
  sorted = 0;
  }
  displayShop(itemList);
}

function typeSort(itemList){
  document.getElementById('price').innerHTML = '<h2>Price</h2>';
  itemList.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  displayShop(itemList);
}


function searchShop(itemList) {
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("shop-list");
  li = itemList.slice();
  let temp = [];
  for (i = 0; i < li.length; i++) {
    content = li[i].name;
    txtValue = content.toUpperCase();
    if (txtValue.indexOf(filter) > -1) {
      temp.push(li[i]);
    } else {
    }
  }
  displayShop(temp);
}
