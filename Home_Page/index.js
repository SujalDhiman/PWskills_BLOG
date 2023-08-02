const createBlogButton=document.querySelector(".addBlog-1")
const formLayout=document.querySelector(".form")
const closeFormButton=document.querySelector(".close")
const blogCollection=document.querySelector(".blogCollection")
const saveBlogButton=document.querySelector(".addBlog-2")

createBlogButton.addEventListener("click",function (){
    formLayout.classList.remove("hide")
})


closeFormButton.addEventListener("click",function (){
    formLayout.classList.add("hide")
})

saveBlogButton.addEventListener("click",function (){
    //grabbing content of form component
    const imageUrl=document.querySelector("#imgUrlUpload").value
    const blogTitle=document.querySelector("#blogTitle").value
    const blogDescription=document.querySelector("#blogDescription").value
    const blogDetails=document.querySelector("#blogDetails").value

    if(!(imageUrl === "" && blogTitle === "" && blogDescription === "" && blogDetails === ""))
    {
        blogCollection.innerHTML+=`<div class="card" id="card-1">  
        <img src=${imageUrl} alt="Img" class="blogImg" height="100px" width="100px">
        <h2 class="title">${blogTitle}</h2>
        <p class="shortDescription">${blogDescription}</p>
        <p class="blogtitle" id="hide">${blogDetails}</p>
        <button class="readMore">Read More</button>
        </div>`

    closeFormButton.click()
    document.querySelector("#imgUrlUpload").value=""
    document.querySelector("#blogTitle").value=""
    document.querySelector("#blogDescription").value=""
    document.querySelector("#blogDetails").value=""
    }
    else
    {
        alert("Please specify fields")
    }

    let readMoreButtons=document.querySelectorAll(".readMore")
    for(let btn of readMoreButtons)
    {
        btn.addEventListener("click",(e)=>{
           for(let child of e.target.parentElement.children)
            {
                if(child.tagName === "IMG")
                   localStorage.setItem("ImageSRC",child.src)
                else
                   localStorage.setItem(child.className,child.innerText)
            }
        })
    }
})


