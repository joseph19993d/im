document.addEventListener(
"DOMContentLoaded",
()=>
{
    loadMenu();
}
);

function loadMenu(){
    const menu = document.getElementById("menu");
    if(menu){
        menu.innerHTML=
        `
        
      <button  src="#" class="menuItemButton"  id="menuItemButton1" style="display: none;"> 
        <div class="contenedor-texto">
          <a src="/">Home</a>
        </div>
      </button>

      <button  src="#" class="menuItemButton"  id="menuItemButton2" style="display: none;"> 
        <div class="contenedor-texto">
          <a src="/collections/all">Shop All </a>
        </div>
      </button>

      <button src="/collections/" class="menuItemButton" id="menuItemButton3" style="display: none;"> 
        <div class="contenedor-texto" >
          <a src="#">secion 1.</a>
        </div>
      </button>
      
      <button src="#" class="menuItemButton" id="menuItemButton4" style="display: none;"> 
        <div class="contenedor-texto" >
          <a src="#">secion 2.</a>
        </div>
      </button>

      <button src="#" class="menuItemButton" id="menuItemButton5" style="display: none;"> 
        <div class="contenedor-texto" >
          <a src="#">secion 3.</a>
        </div>
      </button>

        `
    }



}