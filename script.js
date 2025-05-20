
function somar() {
    const n1 = document.getElementById("n1");
    const n2 = document.getElementById("n2");
    const resultado = document.getElementById("resultado");
    const valor1 = Number(n1.value);
    const valor2 = Number(n2.value);
    const soma = valor1 + valor2;
    resultado.textContent = `Resultado: ${soma}`;
}
