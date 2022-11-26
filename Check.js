const btnList = document.getElementsByClassName('btn')

for(let i=0; i<btnList.length; i++){
    btnList[i].addEventListener('click', timer)
}

var counter = 60

function timer(){
    setInterval(()=>{
        document.querySelector('#header').innerHTML=counter;
        counter = counter - 1
    },1000)
}