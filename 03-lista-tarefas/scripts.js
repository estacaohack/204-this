/**
Exemplo de criação e inserção de um elemento na página.
*/

let caixaTexto = document.querySelector('input');
let lista = document.querySelector('ul');

function adicionarItem(){
	if(caixaTexto.value == ''){
		return;
	}

	let li = document.createElement('li');
	li.innerText = caixaTexto.value;
	li.addEventListener('click', riscarPalavra);
	lista.appendChild(li);

	setTimeout(function(){
		li.style.transform = 'translateX(0)';
	}, 10);

	caixaTexto.value = '';
}

function riscarPalavra(){
	if(this.style.textDecoration == 'line-through'){
		this.style.display = 'none';
	}else{
		this.style.textDecoration = 'line-through';
	}
}
