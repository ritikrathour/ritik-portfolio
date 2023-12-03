// -------------- variables ----------------
let inner_nav_menu = document.querySelector(".inner_nav_menu");
let hambergur_menu = document.querySelector(".hambergur_menu");
let close_menu = document.querySelector(".close_menu");
let header = document.querySelector(".header");
let backto_top = document.querySelector(".backto_top");
let resume_item = document.querySelectorAll(".resume_item")
let nav_items = document.querySelectorAll(".nav_item a");
let home = document.querySelector(".home")
//  --------------- nav bar toggle--------------- 
const nav_menu_active = () => {
   inner_nav_menu.classList.add("active");
}
const close_menuFunc = () => {
   inner_nav_menu.classList.remove("active")
}
close_menu.addEventListener("click", close_menuFunc);
hambergur_menu.addEventListener("click", nav_menu_active);

//  --------------- nav bar scroll --------------- 
const windowScroll = () => {
   // inner_nav_menu.classList.remove("active")
   if (window.scrollY > 0) {
      header.classList.add("header_scroll");
      backto_top.classList.add("active")
   }
   else {
      header.classList.remove("header_scroll");
      backto_top.classList.remove("active")
   }
}
window.addEventListener("scroll", windowScroll);
// --------------- resume_item ---------------
resume_item.forEach((item)=>{
   item.addEventListener("click",()=>{ 
      resume_item.forEach((item)=>{
         item.classList.remove("active"); 
      })
      item.classList.add("active")
      if(item.classList.contains("edu")){
         document.querySelector(".education_container").classList.add("active")
         document.querySelector(".skill_container").classList.remove("active")
      }
      if(item.classList.contains("skill")){
         document.querySelector(".skill_container").classList.add("active")
         document.querySelector(".education_container").classList.remove("active")
      }
   })
})
// nav items 
nav_items.forEach((item,index)=>{
   item.addEventListener("click",()=>{
      close_menuFunc()
      nav_items.forEach((item)=>item.classList.remove("active"))
      item.classList.add("active");
   })
})

// click on backto_top
backto_top.addEventListener("click",()=>{
   home.scrollIntoView({behavior:"smooth"})
   
})

// preloader 
let preloader_container = document.querySelector(".preloader_container");
window.addEventListener("load",()=>{
   setInterval(() => {
      preloader_container.classList.add("stop_preloader");
   }, 500);
})
//  footer date
 let footer_date = document.querySelector(".date");
 footer_date.textContent = new Date().getFullYear()
