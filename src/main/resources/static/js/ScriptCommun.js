// ! BOUTON SWITCH
const switchElement = document.getElementById('switch');

switchElement.addEventListener('change', () => {
    const bodyElement = document.body;

    if (switchElement.checked) {
        bodyElement.classList.remove('body-dark');
        bodyElement.classList.add('body-light');
    } else {
        bodyElement.classList.remove('body-light');
        bodyElement.classList.add('body-dark');
    }
});
//! HEAD
function createHead() {
    const head = document.head;

    // Meta tags
    const metaCharset = document.createElement("meta");
    metaCharset.setAttribute("charset", "UTF-8");
    head.appendChild(metaCharset);

    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1.0";
    head.appendChild(metaViewport);

    // Favicon
    const linkFavicon = document.createElement("link");
    linkFavicon.rel = "icon";
    linkFavicon.type = "image/png";
    linkFavicon.sizes = "96x96";
    linkFavicon.href = "/img/faviconSolalim.png"; 
    head.appendChild(linkFavicon);


    // CSS
    const linkStyleCommun = document.createElement("link");
    linkStyleCommun.rel = "stylesheet";
    linkStyleCommun.href = "/css/StyleCommun.css"; 
    head.appendChild(linkStyleCommun);

    // Bootstrap
    const linkBootstrap = document.createElement("link");
    linkBootstrap.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
    linkBootstrap.rel = "stylesheet";
    linkBootstrap.integrity = "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN";
    linkBootstrap.crossOrigin = "anonymous";
    head.appendChild(linkBootstrap);

    // Font Awesome
    const linkFontAwesome = document.createElement("link");
    linkFontAwesome.rel = "stylesheet";
    linkFontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css";
    head.appendChild(linkFontAwesome);
}
// Appelle de la function à l"ouverture de la page
window.onload = createHead();

//!FOOTER
function createFooter() {
    const footer = document.createElement("footer");
    footer.className = "bg-dark text-light text-center py-3";

    const container = document.createElement("div");
    container.className = "container";

    const copyright = document.createElement("p");
    copyright.innerHTML = "&copy; 2023 Eric UNTERNAHR. Tous droits réservés.";

    const legalMentions = document.createElement("p");
    const legalLink = document.createElement("a");
    legalLink.href = "mentions-legales";
    legalLink.className = "text-light";
    legalLink.textContent = "Technologies utilisées";
    legalMentions.appendChild(legalLink);

    container.appendChild(copyright);
    container.appendChild(legalMentions);

    footer.appendChild(container);

    document.body.appendChild(footer);
}
// Appelle de la function à l"ouverture de la page
window.onload = createFooter;
