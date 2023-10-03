function openNav() {
    document.getElementById("barSidenav").style.width = "100%";
    document.getElementById("nav-img").style.background = black;
    document.getElementsByClassName("nav-img").style.color = white;
    document.getElementByClassName("sidenav").style.right = "-100px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("barSidenav").style.width = "0";
}