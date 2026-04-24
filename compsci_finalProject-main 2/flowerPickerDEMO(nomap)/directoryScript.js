///DIRECTORY TABS///
function openCategory(categoryName){
    //hides menu intially
    document.getElementById("directoryMenu").style.display = "none";

    ///hides after clicking category
    const categories = document.getElementsByClassName("category");
    for(let i = 0; i < categories.length; i++){
        categories[i].style.display = "none";

    }

    //shows category content
    document.getElementById(categoryName).style.display = "block";
}

///RETURN TO MENU///
function returnToMenu(){
    document.getElementById("directoryMenu").style.display = "block";

    //hides category content
    const categories = document.getElementsByClassName("category");
    for(let i = 0; i < categories.length; i++){
        categories[i].style.display = "none";
    
    }

    log2.textContent = " ";
}


const flowersLog = document.querySelectorAll(".flowerInfo");

flowersLog.forEach(flowerInfo => {
    flowerInfo.addEventListener("click", () => {

        // remove all existing text (so only one shows at a time) yeah thats pretttyy awesome
        document.querySelectorAll(".flowerInfo p").forEach(p => p.remove());

        const img = flowerInfo.querySelector("img");
        const text = img.dataset.info;

        const p = document.createElement("p");
        p.textContent = text;

        flowerInfo.appendChild(p);
    });
});