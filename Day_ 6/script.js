// function mt(a,b=1){
//     return a*b;
// }

// mutliply(1)

// spread 


// let a = [1,2,3,4,5]
// let b  = [8,6,7,8,9,10];


// let c  = [...a ,...b]

// console.log(c);


// function Sum(){
//     let sum=0;

//     for(let i=0; i<arguments.length; i++){
//         sum += arguments[i];
//     }

//     return sum;
// }
// console.log(Sum(...c));
// Destruture 



// const  b =  ["red" , "black" , "cat" , "dog" , "apple" , "green"];
// const [,,,a,c]  = b

// console.log( a,e);

const user = {
    name:"raju",
    age:23,
    city:"muz",
    town:{
        a:"mvkv",
        c:"dfg",
    }
}

console.log(user?.name);


// const {name ,city} = user

// console.log(name , city);

// const {town:{a,c}} =user;

// const { town: { a} } = user;
// console.log(c); // Output: dfg

