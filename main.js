const campoA = document.getElementById('numero-1');
const campoB = document.getElementById('numero-2');
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numeroA = parseFloat(campoA.value);
    const numeroB = parseFloat(campoB.value);
    
    const mensagemSucesso = `Sucesso! O <b>campo A (${numeroA})</b> é menor que o <b>campo B (${numeroB})</b>`;
    const mensagemFalha = `Falha! O <b>campo A (${numeroA})</b> deve ser menor que o <b>campo B (${numeroB})</b>`;

    const numeroValido = (numeroA < numeroB);
    const containerMensagemFalha = document.querySelector('.error-message')
    const containerMensagemSucesso = document.querySelector('.success-message')

    if (numeroValido) {

        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemFalha.style.display = 'none';
    } else {

        containerMensagemFalha.innerHTML = mensagemFalha;
        containerMensagemFalha.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    }
});

