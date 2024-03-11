
const p = new Promise((resovle,reject)=>{
      setTimeout(()=>{
          resovle()
      } ,5000)
      setTimeout(()=>{
        reject()
    } ,1000)
});



p.then(()=>{
    console.log("reslove");
}).catch(()=>{
    console.log("error");
})

