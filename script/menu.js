function showMenu(){
    const menu=document.getElementById("menu");
    const bgContainer=document.getElementById("rs-module");
    const buttonMenu= document.getElementById("buttonMenu");
    
    if(menu.style.display== "none"){
        // bgContainer.style.filter = "blur(10px)";
        bgContainer.style.animationName= " blurizable";
        bgContainer.style.animationDuration = "0.5s";
        bgContainer.style.animationIterationCount= 1;
        bgContainer.style.animationFillMode= "forwards";
        menu.style.display="block";
        buttonMenu.innerText="close";

    }else{
        bgContainer.style.animationName= " outBlur";
        bgContainer.style.animationDuration = "0.5s";
        bgContainer.style.animationIterationCount= 1;
        bgContainer.style.animationFillMode= "forwards";
        menu.style.display="none";
        bgContainer.style.filter = "none";
        buttonMenu.innerText="menu";


    }
     
    console.log("showMenu");
}