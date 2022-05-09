let companylogo=document.getElementById("companylogo"); 
let navbar=document.getElementById("navbar");
companylogo.addEventListener('click', () =>{
    if(navbar.style.top=="0vh"){
        navbar.style.top="-62vh";
    }
    else{
        navbar.style.top="0vh";
    }
})
// window.addEventListener('scroll',() =>{
//     if(window.scrollY>=200){
//         companylogo.classList.add("sticky");
        
//     }else{
//         companylogo.classList.remove("sticky");
//     }

// })