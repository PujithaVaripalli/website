
var productcart = ()=>{
  var a = new XMLHttpRequest();
  a.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product/1",true);
  a.send();
  a.onreadystatechange = function(){
      if(this.status == 200 && this.readyState == 4){
          
          // console.log(this.responseText);
         
          var products = JSON.parse(this.responseText);
         

      var product=document.getElementById('product');

      var left_column=document.createElement('div');
      left_column.className="left_div";
      product.append(left_column);

      var right_column=document.createElement('div');
      right_column.className="right_div";
      product.append(right_column);

      var left_image=document.createElement('img'); 
      left_image.src=products.preview;
      left_image.alt="image";
      left_column.append(left_image);

        var pro_description=document.createElement('div');
pro_description.className="product_discription"
right_column.append(pro_description);

var pro_name=document.createElement('h1');
pro_name.innerHTML=products.name;
var brand=document.createElement('h4');
brand.innerHTML=products.brand;
var price=document.createElement('h3');
price="Price: Rs ";
price.className="h3";
var price_data=document.createElement('h3');
price_data.classList="h3";
price_data.innerHTML=products.price;
price_data.style.color="#009688";
price_data.style.fontWeight="bold";
var description_title=document.createElement('h3');
description_title.innerHTML="Description"
var description=document.createElement('p');
description.innerHTML=products.description;
var preview=document.createElement('h3');
preview.innerHTML="Product Preview";
pro_description.append(pro_name,brand,price,price_data,description_title,description,preview);

   var pro_preview=document.createElement('div');
pro_preview.className="product_preview";
right_column.append(pro_preview);

var button=document.getElementById('btn');
button.innerHTML="Add to Cart";
right_column.append(button);

for(var i in products){

  if(i=="photos"){
    for(var j=0;j<i.length;j++){
      var preview_image=document.createElement('img');
      preview_image.src=products[i][j];
      preview_image.className="add_border";
      preview_image.id="img"+j;
     
      pro_preview.append(preview_image);

      if(left_image.src==products[i][j]){
        
        preview_image.style.border="2px solid #009688";
       
      }
      
      
    }
    
  }
 
}
 var imgs=document.getElementsByClassName('add_border');
for(var i=0;i<imgs.length;i++){
var x=imgs[i].id;
var ele=document.getElementById(x);
//ele.setAttribute('onclick','fun_click(this.id)');
ele.addEventListener("click", function(e){ 
//alert(e);
  let ids=e.target.id
for(var j=0;j<imgs.length;j++){
  imgs[j].style.border="none";
}
document.getElementById(ids).style.border="2px solid #009688";
 left_image.src=document.getElementById(ids).src;

 })
  
}               

 }
}
}

productcart();

let cartitem=0;
$('#btn').click(function(){
  cartitem=cartitem+1;
  count.innerText=cartitem;

})




    
   
