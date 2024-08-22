document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
});

function loadHeader() {
    const header = document.getElementById("headerInitial");
    if (header) {

        const savedLanguagePreference = localStorage.getItem('languagePreference');
        header.innerHTML = getHeaderLanguage(savedLanguagePreference);
    } else {
        console.log('No se encontró el elemento con la clase "header"');
    }
}


function getHeaderLanguage(lenguche) {

    if (lenguche !== null) {
        // Si hay un valor guardado, aplicar
        if (lenguche== 'english' ) {
          return  `
          <div class="header-container">
              <a href="/" class="logo">
               <img src="https://cdn.shopify.com/s/files/1/0765/8242/0785/files/Group_80logo.png?v=1722446570" alt="legend gand Logo">
               </a>
              <nav class="nav">
                  <ul class="nav-list">
                      <li class="nav-item"><a href="/">Home</a></li>
                      <li class="nav-item dropdown">
                          <a href="#" class="dropdown-toggle">Sections</a>
                          <ul class="dropdown-menu">
                              <li><a href="/collections/">Shoes</a></li>
                              <li><a href="/collections/">Tshirts</a></li>
                              <li><a href="/collections/">Pants</a></li>
                          </ul>
                      </li>
                      <li class="nav-item"><a href="/collections/all">Shop All</a></li>
                      <li class="nav-item"><a href="#">Contact</a></li>
                  </ul>
              </nav>
          </div>
      `
    
      } else {
          if( lenguche== 'spanish'  ) {
              return `
            <div class="header-container">
                <a href="/" class="logo">
                 <img src="https://cdn.shopify.com/s/files/1/0765/8242/0785/files/Group_80logo.png?v=1722446570" alt="legend gand Logo">
                 </a>
                <nav class="nav">
                    <ul class="nav-list">
                        <li class="nav-item"><a href="/">Inicio</a></li>
                        <li class="nav-item dropdown">
                            <a href="#" class="dropdown-toggle">Sección</a>
                            <ul class="dropdown-menu">
                                <li><a href="/collections/">zapatos</a></li>
                                <li><a href="/collections/">Camisetas</a></li>
                                <li><a href="/collections/">Pantalones</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a href="/collections/all">Tienda completa</a></li>
                        <li class="nav-item"><a href="#">Contactanos</a></li>
                    </ul>
                </nav>
            </div>
        `}
        }
    }else{

      if(lenguche == null) {
        localStorage.setItem('languagePreference','english');
      }

      return `
            <div class="header-container">
                <a href="/" class="logo">
                 <img src="https://cdn.shopify.com/s/files/1/0765/8242/0785/files/Group_80logo.png?v=1722446570" alt="legend gand Logo">
                 </a>
                <nav class="nav">
                    <ul class="nav-list">
                        <li class="nav-item"><a href="/">Home</a></li>
                        <li class="nav-item dropdown">
                            <a href="#" class="dropdown-toggle">Sections</a>
                            <ul class="dropdown-menu">
                                <li><a href="/collections/">Shoes</a></li>
                                <li><a href="/collections/">Tshirts</a></li>
                                <li><a href="/collections/">Pants</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a href="/collections/all">Shop All</a></li>
                        <li class="nav-item"><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        `
    }
  
  }
  