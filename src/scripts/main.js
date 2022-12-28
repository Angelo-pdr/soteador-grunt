document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-soteador').addEventListener('submit', function(e){
        e.preventDefault()
        let numeroMaximo = document.getElementById('numero-maximo').value
        numeroMaximo = parseInt(numeroMaximo)

        let numeroAleatorio = Math.round(Math.random() * numeroMaximo) +1;

        document.getElementById('resultado-valor'). innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block'
    })
})