fetch('https://dummyjson.com/products')
.then((response)=> response.json())
.then((data)=>{
    console.log(data.products[0].brand);;
})