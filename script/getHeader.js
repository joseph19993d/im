document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
});

function loadHeader() {
    const header = document.getElementById("headerInitial");
    if (header) {
        header.innerHTML = `
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
        `;
    } else {
        console.log('No se encontró el elemento con la clase "header"');
    }
}
