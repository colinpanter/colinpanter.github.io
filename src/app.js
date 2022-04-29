export default function main() {
    setupNavBar();
    console.log("Loaded");
}

function setupNavBar() {

    document.getElementById("to-about-me").addEventListener("click", () => {goToPage(0)})
    document.getElementById("to-experience").addEventListener("click", () => {goToPage(1)})
    document.getElementById("to-projects").addEventListener("click", () => {goToPage(2)})
    document.getElementById("to-contact").addEventListener("click", () => {goToPage(3)})
}

function goToPage(pageNumber) {
    const page = document.getElementById("page");
    const height = page.clientHeight;

    page.scrollTo(0, pageNumber*height)
}