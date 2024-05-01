const product =[
    {
        image: 'photos/beige sweater for women.jpg',
        title: 'Beige sweater for women',
        price: 12000
    },
    {
        image: 'photos/navy short wool dress.jpg',
        title: 'Navy short wool dress',
        price: 210000
    },
    {
        image: 'photos/beige half zip wool sweater for men.jpg',
        title: 'Beige half zip wool sweater',
        price: 175000
    },
    {
        image: 'photos/light blue knitted scaarf.jpg',
        title: 'Light blue knitted scarf',
        price: 175000
    },
]
const categories = [...new Set(product.map((item)=>
    {return item}))];

    function delElement(a){
        categories.splice(a, 1);
        displaycart();
    }

    function promo(){
        let promocode=document.getElementById('promocode').value;
        if(promocode==1234){
            displaycart(50);
        }
        else(
            prompt("Enter correct promo code")
        )
    }
    function displaycart(c){
        let j=0, total=0;
        document.getElementById("itemA").innerHTML = categories.length + " Items";
        document.getElementById("itemB").innerHTML = categories.length + " Items";
        if(categories.length==0){
            document.getElementById("root").innerHTML="Your cart is empty";
    
            document.getElementById("totalA").innerHTML = "$ 00.00";
            document.getElementById("totalB").innerHTML = "$ 00.00";
        }
        else{
            document.getElementById("root").innerHTML = categories.map((items)=>{
                let {image, title, price} = items;
                total = total+price;
                document.getElementById("totalA").innerHTML = "$ "+ total +".00";
    
                if(c==50){
                    document.getElementById("totalB").innerHTML="$ "+(total-c)+".00";
                }else{
                    document.getElementById("totalB").innerHTML="$ "+total+ ".00";
                }
    
                return(
                    `<tr>
                        <td width="150"><div class="img-box"><img class="img" src=${image}></div></td>
                        <td width="360"><p style='font-size:15px;'>${title}</p></td>
                        <td width="150"><h2 style='font-size:15px; color:red; '>$ ${price}.00</h2></td>
                        <td width="70">`+"<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></td>"+
                    `</tr>`
                );
            }).join('');
        }
    }
    displaycart();