

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


let itemList = [
  {
   image: "https://cdn.shopify.com/s/files/1/0475/5337/products/gx1000-hood-og-logo-gunmetal-grey_1024x1024@2x.JPG?v=1561626873",
   name: "GX1000 Hoodie",
   price: "$100",
  },
  {
   image: "https://tshop.r10s.jp/w5thst/cabinet/st/spitfire-st015-1.jpg?fitin=330:330",
   name: "Spitfire Sticker",
   price: "$3",
  },
  {
   image: "https://shop.thrashermagazine.com/media/catalog/product/cache/301a51e782445bc103c520dcfd95f60f/t/h/thrasher_flame_black_shirt_web_650px_2.jpg",
   name: "Thrasher T-Shrit",
   price: "$40",
  },
  {
   image: "https://images.blue-tomato.com/is/image/bluetomato/303492209_front.jpg-7qsnaug8bWKM5EHfEVbVM27zMbM/Lord+Nermal+Board+8+25+Skate+Deck.jpg?$b8$",
   name: "Rude Cat Deck",
   price: "$80",
  },
  {
   image: "https://routeone.images.blucommerce.com/routeone/product/00108/001082712.jpg?auto=format%2Ccompress&bluhash=9385c2f3b38ab697a7b881725ee99f2a&w=534&h=681&fit=crop&s=17b879a4d836bee195bf23d36df3cf7a",
   name: "Zero Deck",
   price: "$85",
  },
  {
   image: "https://cms.gtp-icommerce.com.au/clients/s/surfsailaustralia/largeimages/539544.jpg",
   name: "Element Deck",
   price: "$90",
  },
  {
   image: "https://skateparkoftampa.com/spot/productimages/colors/6_74084.jpg",
   name: "Dime Cap",
   price: "$75",
  },
  {
   image: "https://scene7.zumiez.com/is/image/zumiez/Zoom_PDP/DC-Pure-XE-Black-%26-Athletic-Red-Suede-Skate-Shoes-_205292-0001-front.jpg",
   name: "DC Shoes",
   price: "$65",
  }
];

window.onload = function(){window.document.body.onload = displayShop(itemList);}

function displayShop(itemList){
  let itemArray = itemList;
  let text = `<ul id='shop-list'>`;
  for(i=0; itemArray.length > i; i++){
    if(i == 0){
      text += `<div class='shop-row'><li class='shop-item' style='background: url(`+itemArray[i].image+`); background-size: cover;'><div class='shop-txt'><h1>`+itemArray[i].name+`</h1>`+`<h2>`+itemArray[i].price+`</h2></div></li>`;
    }else if(i % 3 == 0){
      text += `</div><div class='shop-row'><li class='shop-item' style='background: url(`+itemArray[i].image+`); background-size: cover;'><div class='shop-txt'><h1>`+itemArray[i].name+`</h1>`+`<h2>`+itemArray[i].price+`</h2></div></li>`;
    }else{
      text += `<li class='shop-item' style='background: url(`+itemArray[i].image+`); background-size: cover;'><div class='shop-txt'><h1>`+itemArray[i].name+`</h1>`+`<h2>`+itemArray[i].price+`</h2></div></li>`;
    }
  }
  text += `</ul>`
  console.log(text);

  document.getElementsByClassName("middle")[0].innerHTML = text;
}



function searchShop() {
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("shop-list");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    content = li[i].getElementsByClassName("shop-txt")[0];
    txtValue = content.textContent || content.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//attempt at array changing
// function searchShop() {
//   let input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById('myInput');
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("shop-list");
//   li = ul.getElementsByTagName('li');
//   let temp = itemList;
//     for (i = 0; i < temp.length; i++) {
//     content = temp[i].name;
//     txtValue = content.textContent || content.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       //li[i].style.display = "";
//       temp.push(li);
//     } else {
//       //li[i].style.display = "none";
//       delete temp[i];
//     }
//   }
//   displayShop(temp);
// }
