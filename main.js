

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
   image: "images/shop/gx1000.jpg",
   name: "GX1000 Hoodie",
   price: 100,
   type: "hoodie",
   age: 1
  },
  {
   image: "images/shop/spitfiresticker.jpg",
   name: "Spitfire Sticker",
   price: 5,
   type: "sticker",
   age: 8
  },
  {
   image: "images/shop/thrashertee.jpg",
   name: "Thrasher T-Shrit",
   price: 40,
   type: "shirt",
   age: 4
  },
  {
   image: "images/shop/rudecatdeck.jpg",
   name: "Rude Cat Deck",
   price: 80,
   type: "deck",
   age: 3
  },
  {
   image: "images/shop/zerodeck.jpg",
   name: "Zero Deck",
   price: 85,
   type: "deck",
   age: 7
  },
  {
   image: "images/shop/elementdeck.jpg",
   name: "Element Deck",
   price: 90,
   type: "deck",
   age: 9
  },
  {
   image: "images/shop/dimecap.jpg",
   name: "Dime Cap",
   price: 75,
   type: "hat",
   age: 2
  },
  {
   image: "images/shop/dcshoe.jpg",
   name: "DC Shoes",
   price: 65,
   type: "shoe",
   age: 3
  },
  {
   image: "images/shop/vansshoes.jpg",
   name: "Vans Pro Skates",
   price: 95,
   type: "shoe",
   age: 4
  },
  {
  image: "images/shop/nikeshoes.jpg",
  name: "NikeSB Orange",
  price: 110,
  type: "shoe",
  age: 2
  },
  {
  image: "images/shop/thrasherhoodie.jpg",
  name: "Thrasher Hoodie",
  price: 120,
  type: "hoodie",
  age: 7
  },
  {
  image: "images/shop/deathwishtee.jpg",
  name: "Death Wish Tee",
  price: 60,
  type: "shirt",
  age: 10
  },
  {
  image: "images/shop/polarcap.jpg",
  name: "Polar Cap (Blue)",
  price: 50,
  type: "hat",
  age: 1
  },
  {
  image: "images/shop/emericahat.jpg",
  name: "Emerica Snapback",
  price: 40,
  type: "hat",
  age: 3
  },
];

let sPath = window.location.pathname;
let sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

window.onload = function(){
  if(sPage == "shop.html"){
   window.document.body.onload = displayShop(itemList);
  }
}

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
