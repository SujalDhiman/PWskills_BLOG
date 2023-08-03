const blogTitle=document.querySelector(".blogTitle")
const blogImg=document.querySelector(".blogImg")
const blogDescription=document.querySelector(".blogDescription")
const blogDetails=document.querySelector(".blogDetails")


blogTitle.innerText=localStorage.getItem("title")
blogImg.setAttribute("src",localStorage.getItem("ImageSRC"))
blogDescription.innerText=localStorage.getItem("shortDescription")
blogDetails.innerText=localStorage.getItem("blogtitle")