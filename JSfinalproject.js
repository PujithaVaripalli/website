var query=location.search;
var productId=query.substring(query.lastIndexOf('=')+1);
console.log(productId)


$('.slider').slick({
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: false,
});



var productcart = ()=>{
    var a = new XMLHttpRequest();
    a.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product"+productId,true);
    a.send();
    a.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            
            // console.log(this.responseText);
            var data = JSON.parse(this.responseText);
           
  var clothing_sec=document.getElementById("clothing");
  var accessories_sec=document.getElementById("accessories");
  


  for(var i=0;i<data.length;i=i+1)
  {
  var card=document.createElement("div");
  card.classList.add("card");
  var image_sec=document.createElement("img");
  image_sec.src=data[i].preview;
  image_sec.alt=data[i].name;
  var text_sec=document.createElement("div");
  card.append(image_sec,text_sec);
  var title=document.createElement("h2");
  title.innerHTML=data[i].name;
  title.id="heading";
  var brand=document.createElement("p");
  brand.innerHTML=data[i].brand;
  brand.id="brand";
  var price=document.createElement("p");
  price.innerHTML="Rs "+data[i].price;
  price.id="price";
  text_sec.append(title,brand,price);

 
    clothing_sec.append(card);
 

  if(data[i].isAccessory===true){
    accessories_sec.append(card)
  }
 
  else{
    clothing_sec.append(card);
  }
  }
  




            }
        }
    }
    productcart();

  