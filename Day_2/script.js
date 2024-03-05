const mint = document.querySelector(".mint")
const hour = document.querySelector(".hour")
const second = document.querySelector(".second")
const date  = document.querySelector(".date")

const  timing = ()=>{
    const time = new Date();
    hour.innerText = (time.getHours()<10?"0":"")+time.getHours();
    mint.innerText = (time.getMinutes()<10?"0":"")+ time.getMinutes();
    second.innerText =(time.getSeconds()<10?"0":"")+ time.getSeconds();

}

setInterval(()=>{
    timing();
},1000)

const dates =() =>{
    const d = new Date();
    let day  = d.getDate();
     let month = d.getMonth();
     let year = d.getFullYear();
     date.innerText = `${day}-${month}-${year}`
}

dates();
