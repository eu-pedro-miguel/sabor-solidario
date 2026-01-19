const btnlike = document.querySelector("#btn-like");
const btndislike = document.querySelector("#btn-dislike");
const mensagem = document.querySelector("#mensagem");
const texto = document.querySelector("#mens");

function mensagem_suporte(tipo, texto) {
    mensagem.className = `mensagem ${tipo}`;
    mensagem.innerHTML = texto;

    mensagem.classList.remove("visivel");

    requestAnimationFrame(() => {
        mensagem.classList.add("visivel");
    });
}

btnlike.addEventListener("click", () => {
    mensagem_suporte(
        "bom",
        "Obrigado pelo feedback <strong>positivo</strong>! Nós estamos melhorando o nosso site a <strong>cada dia</strong>",
    )
})

btndislike.addEventListener("click", () => {
    mensagem_suporte(
        "ruim",
        "Compreendemos que você teve problemas, por isso estamos melhorando o nosso site a <strong>cada dia</strong>",
    )
});