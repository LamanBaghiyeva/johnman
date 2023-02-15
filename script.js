AOS.init();
//Menu
const link = document.querySelector(".link")
const faBars = document.querySelector(".fa-bars")
const section=document.querySelector(".introsection")

faBars.addEventListener("click", function(){
  link.classList.toggle("aktiv")
  section.style.paddingTop="0"
})


//Json
const kart=document.querySelector(".posts")
console.log(kart)

//Hoising
window.onload = mehsullarigetir
async function mehsullarigetir(){
const unvan="./post.json"


try{
const serverdengelenmelumatlar=await fetch(unvan)//respond
const frontendgelecekforma= await serverdengelenmelumatlar.json()//filter
console.log(frontendgelecekforma)
for(let i=0; i<frontendgelecekforma.length;i++){
    kart.innerHTML+=`
    <div class="row">
    <div class="card">
  <div class="card-body">
    <h2 class="card-title">${frontendgelecekforma[i].head}</h2>
    <p class="card-text middle">${frontendgelecekforma[i].date} <span class="ms-3 me-3">|</span>${frontendgelecekforma[i].tema}</p>
    <p href="#" >${frontendgelecekforma[i].text}</p>
</div>
</div>
</div>`

}


}
catch(e){

}
finally{

}
}

//Darkmode
const moon=document.querySelector(".fa-moon")
const body=document.querySelector("body")
moon.addEventListener("click", myFun)
function myFun(e){
  e.preventDefault()
  document.querySelector(".section2").style.background="#000"
  document.body.classList.add("dark-mode")
 
}







