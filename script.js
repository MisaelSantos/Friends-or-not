const nome = document.querySelector('input.name');
const numero = document.querySelector('input.number');
$("input.number").mask("(00) 9 0000-0000");
const comida = document.querySelector('input.food');
const btn = document.querySelector('div div form button');

const arr = ['Jet ski', 'as pernas', 'a magrela(bike)', 'helicóptero', 'skate', 'carro', 'mobilete'];

btn.onclick = () => {
    if (nome.value !== '' && numero.value !== '' && comida.value !== '') {
        if (confirm('Combinação do texto gerado, aceitar?'))
            window.open('https://api.whatsapp.com/send?phone=' + '55' + numero.value + '&text=' +
                'Hey, ' + nome.value + ', como vai?(Espero que bem😉).' +
                ' Venho fazer um humilde convite, eu sei que você gosta de ' + comida.value + '😍' +
                ' ,então vamos ter o encontro, qualquer horário que desejar, manhã, tarde, noite, madrugada.' +
                ' Se caso topar eu te encontro com ' + arr[Math.floor(Math.random() * 7)] + ', bora viver essa aventura?😎 ' +
                'Aguardo ansiosamente sua resposta...');
    } else {
        alert('Preencha todos os campos');
    }

}