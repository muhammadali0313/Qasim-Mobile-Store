const product =[
    {
        id:0,
        Image:'images/15pro.png',
        title:'iphone 15 Pro',
        price:'$899',
    },
    {
        id:1,
        Image:'images/15.png',
        title:'iphone 15 ',
        price:'$799',
    },
    {
        id:2,
        Image:'images/14.png',
        title:'iphone 14',
        price:'$699'
    },
    {
        id:3,
        Image:'images/13.png',
        title:'iphone 13',
        price:'$599',
    },
]
const categories = [...new Set(product.map((item) => { return item }))]

        document.getElementById('searchBar').addEventListener('keyup', (e) => {
            const searchData = e.target.value.toLowerCase();
            const filteredData = categories.filter((item) => {
                return (
                    item.title.toLowerCase().includes(searchData)
                )
            })
            displayItem(filteredData)
        });

const displayItem = (items) =>{
    document.getElementById('root').innerHTML=items.map((item)=>{
        var {Image, title, price}= item;
        return(
            `<div class='box'>
             <div class='img-box'>
               <img class='image' src= ${Image}></img>
             </div>
         <div class='bottom'>
         <p>${title}</p>
         <h2>${price}.00</h2>
         <button>Add To Card</button>
         </div>
         </div>`
         )
    }).join('')
};
displayItem(categories);

