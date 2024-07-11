function showMenu(){
    const menu=document.getElementById("menu");
    const bgContainer=document.getElementById("rs-module");
    const buttonMenu= document.getElementById("buttonMenu");
    if(menu.style.display== "none"){
        bgContainer.style.filter = "blur(10px)";
        menu.style.display="block";
        buttonMenu.innerText="menu";
    }else{
        menu.style.display="none";
        bgContainer.style.filter = "none";
        buttonMenu.innerText="menu";

    }
     
    console.log("showMenu");
}