AOS.init();
const link = document.querySelector(".link")
const faBars = document.querySelector(".fa-bars")

faBars.addEventListener("click", function(){
  link.classList.toggle("aktiv")

})


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
    <div class="card" style="width: 30rem;">
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








