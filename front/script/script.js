//authorization and registration
function visible(){
    let auth =document.querySelector(".authorization");
    auth.classList.toggle("reg_auth_visible");
    let reg =document.querySelector(".registration");
    reg.classList.toggle("reg_auth_visible");
}
//Personal area visible
function PA_drop(){
    let drop = document.querySelector('.PA_drop');
    if (drop.style.display!=="flex") {
        drop.style.display="flex";
        console.log(drop.style.display);
    }else if (drop.style.display=="flex"){
        drop.style.display="none"
    }
}
//info_strage
const AUTH = {
    user_id:1
}
const CITIES = {
    city_id: 1,
    name: "Москва"
}
const ORDERS = [
    {
        order_id:1,
        city_id:1,
        client_id:1,
        cost:10000,
        datetime:new Date('2021-11-17T01:24:32'),
        products:[
            {
                product_id:1,
                name:"винтик",
                city_id:1,
                price:10
            },
            {
                product_id:2,
                name:"лопата",
                city_id:2,
                price:8
            }
        ]
    },
    {
        order_id:2,
        city_id:1,
        client_id:1,
        cost:10000,
        datetime:new Date('2021-11-17T01:24:32'),
        products:[
            {
                product_id:1,
                name:"винтик",
                city_id:1,
                price:10
            },
            {
                product_id:2,
                name:"лопата",
                city_id:2,
                price:8
            }
        ]
    },
    {
        order_id:3,
        city_id:1,
        client_id:1,
        cost:10000,
        datetime:new Date('2021-11-17T01:24:32'),
        products:[
            {
                product_id:1,
                name:"винтик",
                city_id:1,
                price:10
            }
        ]
    }
]
let html = ``;
let options=ORDERS.map(item=>{
    let time_op = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };
    let products = item.products.map(product=>`${product.name} (${product.price})`);
    html+=`<li><p>${item.order_id}</p>
               <p>${products.join('<br>')}</p>
               <p>${item.cost}</p>
               <p>${CITIES.name}</p>
               <p>${item.datetime.toLocaleString("ru", time_op)}</p>
            </li>`
})
let orders_table = document.querySelector(".orders_table");
orders_table.innerHTML=html;
//storage_table
// let storage_table = document.querySelector(".storage_table");
// storage_table.innerHTML = html;
