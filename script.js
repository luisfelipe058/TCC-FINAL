



const hamburguerMenu = document.querySelector(".hamburguer-menu");
const menu = document.getElementById("menu");

hamburguerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});




//   ------Carrocl do sobre-------\\

const imagensContainer = document.querySelector(".sobreimagens");
const imagens = document.querySelectorAll(".sobreimagens img");
const totalImagens = imagens.length;
let indiceAtual = 0;
function avancarCarrossel() {
    indiceAtual = (indiceAtual + 1) % totalImagens;
    const larguraImagem = imagens[0].clientWidth;
    //(translateX) desloca na horizontal ($) junta o número com o texto (-) para ir para esquerda (`) tem que estar entre crase.
    imagensContainer.style.transform = `translateX(-${indiceAtual * larguraImagem}px)`;
}
setInterval(avancarCarrossel, 3000)

//   -------Fim do carrocel do sobre----------\\

// --------------------logos--------------------
const imagensContainer2 = document.querySelector(".sobreimagens2");
const imagens2 = document.querySelectorAll(".sobreimagens2 img");
const totalImagens2 = imagens2.length;
let indiceAtual2 = 0;
function avancarCarrossel2() {
    indiceAtual2 = (indiceAtual2 + 1) % totalImagens2;
    const larguraImagem = imagens2[0].clientWidth;
    //(translateX) desloca na horizontal ($) junta o número com o texto (-) para ir para esquerda (`) tem que estar entre crase.
    imagensContainer2.style.transform = `translateX(-${indiceAtual2 * larguraImagem}px)`;
}
setInterval(avancarCarrossel2, 2500)

// --------------------fim das logos----------------


// -----------Modo Escuro--------------//
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
})
//---------Fim do Modo escuro------//




// ------Relatos dos professores------\\

document.querySelectorAll(".titulo").forEach(titulo => {
    titulo.addEventListener("click", () => {
        const conteudo = titulo.nextElementSibling; //Encontra próximo elemento irmão (conteúdo associado ao título).
        document.querySelectorAll(".conteudo").forEach(c => {
            if (c !== conteudo) { // (!==) Não igual 
                c.style.maxHeight = null;
            }
        });
        if (conteudo.style.maxHeight) {
            conteudo.style.maxHeight = null;
        } else {
            conteudo.style.maxHeight = conteudo.scrollHeight + "px"
        }
    })
})

function rotateJoao() {
    const joao = document.getElementById("joao")
    joao.style.transform = joao.style.transform === "scale(1, -1)" ? "scale(1, 1)" : "scale(1, -1)"
}
function rotateClarice() {
    const clarice = document.getElementById("clarice")
    clarice.style.transform = clarice.style.transform === "scale(1, -1)" ? "scale(1, 1)" : "scale(1, -1)"
}
function rotateGustavo() {
    const gustavo = document.getElementById("gustavo")
    gustavo.style.transform = gustavo.style.transform === "scale(1, -1)" ? "scale(1, 1)" : "scale(1, -1)"
}


//---------- JavaScript relatos ex alunos --------

// pega os elementos com a classe ano
const btns = document.querySelectorAll('.btn')
// pega os elementos com a classe ano
const anos = document.querySelectorAll('.ano')

// aplica o que está dentro para todos os btns que estão recebendo o apelido de btn
btns.forEach(btn => {
    // adiciona um evento de click no btn
    btn.addEventListener('click', () => {
        // cria a variável para reservar qual ano foi mudado
        anos_foram = []
        // verifica o valor do btn para saber se vai para a direita ou esquerda
        if (btn.value == 'esquerda') {
            // aplica o que está dentro para todos os anos que estão recebendo o apelido de ano
            anos.forEach(ano => {
                // verifica se ano tem a classe fundo_esquerda e não está na lista anos_foram
                if (ano.classList.contains('fundo_esquerda') && !anos_foram.includes(ano)) {
                    // adiciona a classe lado_esquerdo
                    ano.classList.add('lado_esquerdo')
                    // remove a classe fundo_esquerda
                    ano.classList.remove('fundo_esquerda')
                    // remove a transição none do elemento ficando só com a config do css
                    ano.style.transition = ''
                    // adiciona o ano na lista anos_foram
                    anos_foram.push(ano)
                }
                // verifica se ano tem a classe lado_esquerdo e não está na lista anos_foram
                if (ano.classList.contains('lado_esquerdo') && !anos_foram.includes(ano)) {
                    // adiciona a classe meio
                    ano.classList.add('meio')
                    // remove a classe lado_esquerdo
                    ano.classList.remove('lado_esquerdo')
                    // adiciona ano na lista anos_foram
                    anos_foram.push(ano)
                }
                // verifica se ano tem a classe meio e não está na lista anos_foram
                if (ano.classList.contains('meio') && !anos_foram.includes(ano)) {
                    // adiciona a classe lado_direito
                    ano.classList.add('lado_direito')
                    // remove a classe meio
                    ano.classList.remove('meio')
                    // adiciona ano na lista anos_foram
                    anos_foram.push(ano)
                }
                // verifica se ano tem a classe lado_direito e não está na lista anos_foram
                if (ano.classList.contains('lado_direito') && !anos_foram.includes(ano)) {
                    // adiciona a classe fundo_direito
                    ano.classList.add('fundo_direito')
                    // remove a classe lado_direito
                    ano.classList.remove('lado_direito')
                    // adiciona ano na lista anos_foram
                    anos_foram.push(ano)
                }
                // verifica se ano tem a classe fundo_direito e não está na lista anos_foram
                if (ano.classList.contains('fundo_direito') && !anos_foram.includes(ano)) {
                    // adiciona a classe fundo_esquerda
                    ano.classList.add('fundo_esquerda')
                    // remove a classe fundo_direito
                    ano.classList.remove('fundo_direito')
                    // adiciona na linha do elemento uma transição none
                    ano.style.transition = 'none'
                    // adiciona ano na lista anos_foram
                    anos_foram.push(ano)
                }
            })
            // se o valor do botão clicado não foi o da esquerda
        } else {
            // aplica o que está dentro para todos os anos que estão recebendo o apelido de ano
            anos.forEach(ano => {
                // verifica se ano tem a classe fundo_esquerda e não está na lista anos_foram
                if (ano.classList.contains('fundo_esquerda') && !anos_foram.includes(ano)) {
                    // adiciona a classe fundo direito
                    ano.classList.add('fundo_direito')
                    // remove a classe fundo_esquerda
                    ano.classList.remove('fundo_esquerda')
                    // adiciona na linha do elemento uma transição none
                    ano.style.transition = 'none'
                    // adiciona ano na lista anos_foram
                    anos_foram.push(ano)
                }
                // verifica se ano tem a classe lado_esquerdo e não está na lista anos_foram
                if (ano.classList.contains('lado_esquerdo') && !anos_foram.includes(ano)) {
                    // adiciona a classe fundo_esquerda
                    ano.classList.add('fundo_esquerda')
                    // remove a classe lado_esquerdo
                    ano.classList.remove('lado_esquerdo')
                    // adiciona ano na lista anos_foram
                    anos_foram.push(ano)
                }
                // verifica se ano tem a classe meio e não está na lista anos_foram
                if (ano.classList.contains('meio') && !anos_foram.includes(ano)) {
                    // adiciona a classe lado_esquerdo
                    ano.classList.add('lado_esquerdo')
                    // remove a classe meio
                    ano.classList.remove('meio')
                    // adiciona ano na lista anos_foram
                    anos_foram.push(ano)
                }
                // verifica se ano tem a classe lado_direito e não está na lista anos_foram
                if (ano.classList.contains('lado_direito') && !anos_foram.includes(ano)) {
                    // adiciona a classe meio
                    ano.classList.add('meio')
                    // remove a classe lado_direito
                    ano.classList.remove('lado_direito')
                    // adiciona ano na lista anos_foram
                    anos_foram.push(ano)
                }
                // verifica se ano tem a classe fundo_direito e não está na lista anos_foram
                if (ano.classList.contains('fundo_direito') && !anos_foram.includes(ano)) {
                    // adiciona a classe lado_direito
                    ano.classList.add('lado_direito')
                    // remove a classe fundo_direito
                    ano.classList.remove('fundo_direito')
                    // remove a transição none do elemento ficando só com a config do css
                    ano.style.transition = ''
                    // adiciona ano na lista anos_foram
                    anos_foram.push(ano)
                }
            })
        }
    })
})

//---------- JavaScript relatos ex alunos fim --------


// -----modo escuro exalunos----

function darkMode() {
    document.body.classList.toggle("dark-theme");
}

// -----modo escuro exalunos fim----


const secao = document.getElementById('secao_relato')
const fechar = document.getElementById('fechar')
const btns_relato = document.querySelectorAll('.btn-relato')
btns_relato.forEach(btn_relato => {
    btn_relato.addEventListener('click', () => {
        let ano = btn_relato.closest('.ano')
        secao.classList.add('ativo')
        secao.classList.add(ano.id)
        fechar.addEventListener('click', () => {
            secao.classList.remove('ativo')
            secao.classList.remove(ano.id)
        })
    })
})

const secao2 = document.getElementById('secao_relato2')
const fechar2 = document.getElementById('fechar2')
const btns_relato2 = document.querySelectorAll('.btn-relato2')
btns_relato2.forEach(btn_relato2 => {
    btn_relato2.addEventListener('click', () => {
        let ano = btn_relato2.closest('.ano')
        secao2.classList.add('lead')
        secao2.classList.add(ano.id)


        fechar2.addEventListener('click', () => {
            secao2.classList.remove('lead')
            secao2.classList.remove(ano.id)
        })
    })
})



const secao3 = document.getElementById('secao_relato3')
const fechar3 = document.getElementById('fechar3')
const btns_relato3 = document.querySelectorAll('.btn-relato3')
btns_relato3.forEach(btn_relato3 => {
    btn_relato3.addEventListener('click', () => {
        let ano = btn_relato3.closest('.ano')
        secao3.classList.add('lead3')
        secao3.classList.add(ano.id)

        fechar3.addEventListener('click', () => {
            secao3.classList.remove('lead3')
            secao3.classList.remove(ano.id)
        })
    })
})


const secao4 = document.getElementById('secao_relato4')
const fechar4 = document.getElementById('fechar4')
const btns_relato4 = document.querySelectorAll('.btn-relato4')
btns_relato4.forEach(btn_relato4 => {
    btn_relato4.addEventListener('click', () => {
        let ano = btn_relato4.closest('.ano')
        secao4.classList.add('lead4')
        secao4.classList.add(ano.id)

        fechar4.addEventListener('click', () => {
            secao4.classList.remove('lead4')
            secao4.classList.remove(ano.id)
        })
    })
})


const secao5 = document.getElementById('secao_relato5')
const fechar5 = document.getElementById('fechar5')
const btns_relato5 = document.querySelectorAll('.btn-relato5')
btns_relato5.forEach(btn_relato5 => {
    btn_relato5.addEventListener('click', () => {
        let ano = btn_relato5.closest('.ano')
        secao5.classList.add('lead5')
        secao5.classList.add(ano.id)

        fechar5.addEventListener('click', () => {
            secao5.classList.remove('lead5')
            secao5.classList.remove(ano.id)
        })
    })
})




//------------------------------accordion--------------------
