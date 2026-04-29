async function carregarComponente(id, arquivo){
    const resp = await fetch(arquivo);
    const html = await resp.text();
    document.getElementById(id).innerHTML = html;
}

carregarComponente("header", "../components/header.html");
carregarComponente("footer", "../components/footer.html");

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});