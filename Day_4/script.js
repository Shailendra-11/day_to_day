const minus = document.querySelector(".left-minus");
const plus = document.querySelector(".plus-rigth");
const data = document.querySelector(".data");
const Increment = document.querySelector(".Increment");
  const reset =document.querySelector(".reset")
minus.addEventListener('click' , (e) =>{
       
         const valuemins = +(data.innerText); 
         const CountUpadate = parseInt(Increment.value);
         data.innerText= valuemins-CountUpadate;   
    
          
})

 plus.addEventListener('click' ,(e) =>{
     const coutValue = parseInt(data.innerText)
     const CountU = +Increment.value;
     data.innerText = coutValue+CountU;

})


reset.addEventListener('click', (e) =>{

    data.innerText =0;
})

