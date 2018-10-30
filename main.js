function addtocart () {
        console.log ("are my items adding")
        var cartString = localStorage.getItem("cart") || "[]"
        var cart = JSON.parse(cartString);


        var pillowtype = document.getElementById("pillowtype")
        // var type = pillowtype.innerHTML
        var type = pillowtype.innerText;
        // console.log("type added to cart: " + type);

        var fill = document.getElementById("fill")
        var fillType = fill.value

        var quantity = document.getElementById("quantity")
        var quantityamount = quantity.value

        var obj = {'fill':fillType, 'quantity':quantityamount, 'pillowtype':type}
        console.log(cart, "is cart an array")
        //cart.push(obj)
        //localStorage.setItem("cart", JSON.stringify(cart));

        var Duplicate_found = false
        var cart_item = 0 
        for (var i=0; i<cart.length; i++) {
            if (cart[i].fill == obj.fill &&
                cart[i].pillowtype == obj.pillowtype){
                Duplicate_found = true;
                cart_item=i;
            }
        }

        if (!Duplicate_found){
            cart.push(obj);
            localStorage.setItem('cart',JSON.stringify(cart));
            document.getElementById("number").innerHTML=JSON.parse(localStorage.cart).length;

        }else {
            localStorage.setItem('cart', JSON.stringify(cart));
            document.getElementById("number").innerHTML=JSON.parse(localStorage.cart).length;
            var temp = parseInt(cart[cart_item].quantity)
            console.log(temp)
            temp +=parseInt(obj.quantity);
            cart[cart_item].quantity = temp
            localStorage.setItem ('cart', JSON.stringify(cart));
            document.getElementById("number").innerHTML=JSON.parse(localStorage.cart).length;
            }
        }

        //if isNaN(localStorage.len) {
        //    var currLen = 0
        //}
        //else {
        //var currLen = localStorage.len 
        //}
        //localStorage.setItem('len', Number(currLen) + 1);





var productName = {
    "Round Pillow":"round2.png",
    "Square Pillow":"square2.png",
    "Rectangle Pillow":"rectangle2.png",
    "Long Pillow":"long2.png"
}
var object;
var name;
function renderCart() {
    var cart = JSON.parse(localStorage.cart);
    console.log ("localStorage.cart.length");
    for (var i = 0; i < cart.length; i++){
            object = cart[i];
            name = productName[object.pillowtype];
            console.log(object.pillowtype);
            console.log(name);
            var row = '<tr>'+  
                      '<td>'+ "<img src=' " + name + " '/><span class='pillowName'>" + object.pillowtype + '</span></td>' + 
                      '<td>'+ object.fill + '</td>' + 
                      '<td>'+ object.quantity + '</td>' + 
                      '<td>'+ "$"+(object.quantity*20.00) + '</td>' + 
                      '<td class = "delete">' + "<img src= 'delete-icn.svg'/>" + '</td>' + 
                      '</tr>';
            $('#table').append(row);
            $(row).data("item", object)
    }
    $(document).on('click', '.delete', remove)
}


function remove() {
    var row = this.parentNode
    row.parentNode.removeChild(row);
    var pillowName = row.id
    console.log(object);
    var cartString = localStorage.getItem("cart") 
    var cart = JSON.parse(cartString);
    var index = cart.indexOf(object)
    console.log(index);
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadData() {
    console.log("am i getting data");
    document.getElementById("localcart").innerHTML=localStorage.getItem("cart");
}

function length(){
    console.log("am i getting length");
    document.getElementById("number").innerHTML=JSON.parse(localStorage.cart).length;
} 


