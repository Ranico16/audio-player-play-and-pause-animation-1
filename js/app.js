let mainCover = document.querySelector("#main_cover");

mainCover.addEventListener("click", () => {

    if( mainCover.classList.contains("active") )
    {
        mainCover.classList.remove("active");
        mainCover.classList.add("inactive");
    }
    else
    {
        mainCover.classList.remove("inactive");
        mainCover.classList.add("active");
    }
});

let posts = document.querySelectorAll(".p_img");

imagesLoaded( posts, function()
{
   document.querySelector("#cover").classList.add("loaded"); 
   document.querySelector("#loading").classList.add("loaded"); 
});