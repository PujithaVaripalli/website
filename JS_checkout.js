var productcart = ()=>{
    var a = new XMLHttpRequest();
    a.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product/1",true);
    a.send();
    a.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            
            var products = JSON.parse(this.responseText);

           var section = document.createElement('div');
           section.className="section";
           
           var img=document.createElement('img');
           img.src=products.preview;
           img.alt="image";
           img.className="image";
           document.getElementById('sec3').append(img);

           var name=document.createElement('h4');
           name.innerHTML=products.name
           name.className=" name"
           document.getElementById('sub_sec3').append(name);

           
           var count=document.createElement('h3');
           count.className="count";
           count.innerHTML="x2";
           document.getElementById('sub_sec3').append(count);
   

           var amount=document.createElement('p');
           amount.className="Amount";
           amount.innerHTML="Amount: Rs 5198";
           document.getElementById('sub_sec3').append(amount);

           

        }
    }
}
productcart();

