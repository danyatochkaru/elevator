//authorization and registration
function visible(){
    let auth =document.querySelector(".authorization");
    auth.classList.toggle("reg_auth_visible");
    let reg =document.querySelector(".registration");
    reg.classList.toggle("reg_auth_visible");
}
//info_orders
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
//info_storage
const STORAGES={
    storage_id:1,
    name:"ЩЛЗ"
}
const STORAGE = [
    {
        incoming_id:1,
        datetime: new Date('2021-12-11T13:13:13'),
        products:[
            {
                product_id:1,
                name:"Болт",
                count:23,
                price:23,
                storage_id:2
            }
        ]
    },
    {
        incoming_id:2,
        datetime: new Date('2021-10-11T10:03:13'),
        products:[
            {
                product_id:2,
                name:"Гайка",
                count:54,
                price:18,
                storage_id:1
            },
            {
                product_id:3,
                name:"Палка",
                count:91,
                price:10,
                storage_id:1 
            }
        ]
    },
    {
        incoming_id:3,
        datetime: new Date('2021-09-11T04:13:13'),
        products:[
            {
                product_id:1,
                name:"Болт",
                count:100,
                price:23,
                storage_id:3
            }
        ]
    }
]
let html = ``;
if (document.location.href=="http://127.0.0.1:5500/front/page/orders.html") {
    let options_order=ORDERS.map(item=>{
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
}else if(document.location.href=="http://127.0.0.1:5500/front/page/storage.html"){
    let options_storage=STORAGE.map(item=>{
        let time_op = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          };
        let products = item.products.map(product=>`${product.name} (${product.price})`);
        let count = item.products.map(product=>`${product.count}`);
        let product_id=item.products.map(product=>`${product.product_id}`)
        html+=`<li><p>${product_id.join('<br>')}</p>
                   <p>${products.join('<br>')}</p>
                   <p>${count.join('<br>')}</p>
                   <p>${STORAGES.name}</p>
                   <p>${item.datetime.toLocaleString("ru", time_op)}</p>
                </li>`
    })
    let storage_table = document.querySelector(".storage_table");
    storage_table.innerHTML = html;
}

