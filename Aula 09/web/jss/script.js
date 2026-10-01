
  // Recebe três números e devolve a média.
    function calcularMedia(a, b, c) {
        return (a + b + c) / 3;
    }

    // Localiza o formulário no HTML.


    const formulario = document.getElementById("formNotas");

    // Executa este código quando o formulário é enviado.
    formulario.addEventListener("submit", function (evento) {
        // Evita que o envio recarregue a página.
        evento.preventDefault();

        // Lê cada campo e converte seu texto para número.
        const nota1 = Number(document.getElementById("nota1").value);
        const nota2 = Number(document.getElementById("nota2").value);
        const nota3 = Number(document.getElementById("nota3").value);

        // Chama a função e guarda o resultado retornado.
        const media = calcularMedia(nota1, nota2, nota3);

        // Escreve a média no parágrafo, com duas casas decimais.
        document.getElementById("resultado").textContent =
            "Resultado: " + media.toFixed(2);
    });