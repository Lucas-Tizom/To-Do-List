
let lista = document.getElementById("lista");

let itensSalvos = JSON.parse(localStorage.getItem("itens")) || [];

itensSalvos.forEach(item => {
    let novoItem = document.createElement("li");
    novoItem.textContent = item;
    lista.appendChild(novoItem);
});

function addItem() {
    let display = document.getElementById("display");
    let novoItem = document.createElement("li");
    novoItem.textContent = display.value;
    lista.appendChild(novoItem);
    display.value = "";

    itensSalvos.push(novoItem.textContent);

    localStorage.setItem("itens", JSON.stringify(itensSalvos));
}



function limpar() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }
    localStorage.removeItem("itens");
}