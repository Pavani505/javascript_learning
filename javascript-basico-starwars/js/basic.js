console.log('Olá, Javascript!')


var userName = 'Andre'
document.getElementById('user-name').innerHTML = userName

function boasVindas(nome) {
    alert(nome + ', Seja bem-vindo(a)')
}
boasVindas(userName)


// constantes
// const nameTeste = 'Darth Vader'
// console.log(nameTeste)
// nameTeste = 'Mestre Yoda' nao da pra substituir o valor de uma constante
// console.log(nameTeste)


// objects que sao super variaveis
// var yoda = {}
// yoda.name = 'Mestre Yoda'
// yoda.idade = 100
// yoda.jedi = true

// console.log(yoda)

// var yoda = {
//     name: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function() {
//         console.log(`A idade do ${this.name} é ${this.idade}`)
//     }
// }
// yoda.mostraIdade()

// controle de repeticao
// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa leia', 'Darth Vader']
// personagens.forEach(function(p){
//     console.log(p)
// })

// for (var i in personagens) {
//     console.log(i)
//     console.log(personagens[i])
// }

// var tamanhoArrayPersonagens = personagens.length 
// for (var i = 0; i <= tamanhoArrayPersonagens; i++) {
//     console.log(i)
//     console.log(personagens[i])
// }

// var tamanhoArrayPersonagens = personagens.length
// for (var i = 0; i <= tamanhoArrayPersonagens;) {
//     console.log(i)
//     console.log(personagens[i])
//     i = i + 1
// }

// array
// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa leia', 'Darth Vader']
// console.log(personagens)

// como remover um elemento especifico do array
// personagens = personagens.filter(function(p) {
//     return p !== 'Darth Vader'
// })

// personagens.push('C3pO') adiciona um item no array
// console.log(typeof personagens)
// console.log(personagens)
// console.log(personagens.length)
// personagens.pop() remover ultimo elemento do array
// console.log(personagens.length)

// controle de fluxos

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletronicos
// Para poder comprar em lugar que nao aceitam o cartao de debido ou credito

// var saldo = 1000
// var saqueMaximo = 700
// function saque(valor) {
//     if (valor > saldo) {
//         console.log('Valor do saque maior que o saldo')
//     } else if (valor > saqueMaximo) {
//         // alert(`O valor ${valor} é maior do que o máximo estipulado de ${saqueMaximo}`)
//         console.log(`O valor ${valor} é maior do que o máximo estipulado de ${saqueMaximo}`)
//     } 
//       else {
//         saldo = (saldo - valor)
//     }
// }

// saque(701)
// console.log(saldo)

// cenario 1 - saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor deve ser deduzido do meu salvo

// cenario 2 - saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir o saldo
// E mostrar um alerta informando que o valor é superior ao saque

// cenario 3 - saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor maximo de operacao é de 700 reais
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir o saldo
// E deve mostrar um alerta informando que o valor é superior ao máximo permitido por operação

// variables
// como seria é no javascript
// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// como seria no java ou c#
// string nome = 'Mestre Yoda'
// int idade = 100
// bool jedi = true

// console.log(typeof nome, idade, jedi)

//operadores matematicos
// var n1 = 1
// var n2 = 2
// var n3 = '3'

// console.log(n1+n2)
// console.log(n1+parseInt(n3))

//operadores de comparação
// Igual (==)
// Retorna verdadeiro se os valores comparados forem iguais.
// 1=='1' //true

// Não igual (!=)
// Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.
// 4!=1 //true

// Igual estrito (===)
// Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.
// 3==='3' //false
// 3===3 //true

// Não igual estrito (!==)
// Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes
// 3!=='3' //true
// 3!==3 //false
// 3!==4 //true

// Maior que (>)
// Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
// 1>2 //false
// 5>3 //true
// 4>'1' //true

// Maior ou igual que (>=)
// Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro
// 1>=2 //false
// 5>=3 //true
// 4>='1' //true
// 2>=2 // true

// Menor que (<)
// Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro
// 1<2 //true
// 5<3 //false
// 4<'1' //false    

// Menor ou igual que (<=)
// Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro
// 1<=2 //true
// 5<=3 //false
// 4<='1' //false
// 2<=2 // true