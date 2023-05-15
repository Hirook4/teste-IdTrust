/*
1 - Monte a estrutura condicional if/else para as regras abaixo e no final o que será mostrado para cada valores:
Regras:
- homens a partir de 65 anos, escrever APOSENTADO;
- mulheres a partir de 60 anos, escrever APOSENTADA;
- pessoas entre 13 que 18 anos, escrever ADOLESCENTE;
- pessoas menores que 13 anos, escrever CRIANÇAS;
- todos os outros, escrever ADULTO; 

Lista de valores para o teste: sexo;idade

a) masculino;74
b) feminino;4
c) feminino;13
d) masculino;60
e) masculino;19
f) feminino;60
*/

console.log(' -     Exercicio 1     - ')
console.log('Exibe as informações conforme os dado que foram colocados nas variáveis gênero e idade')

// Trocar variavel para testar
let genero = 'masculino';
let idade = 74;

if (genero == 'masculino') {
    if (idade < 65) {

        if (idade >= 18) {
            console.log(`Homem - ${idade} - Adulto`)
        } else if (idade >= 13 && idade <= 18) {
            console.log(`Homem - ${idade} - Adolescente`);
        } else {
            console.log(`Homem - ${idade} - Criança`)
        }

    } else {
        console.log(`Homem - ${idade} - Aposentado`);
    }
} else if (genero == 'feminino') {
    if (idade < 60) {

        if (idade >= 18) {
            console.log(`Mulher - ${idade} - Adulto`)
        } else if (idade >= 13 && idade <= 18) {
            console.log(`Mulher - ${idade} - Adolescente`);
        } else {
            console.log(`Mulher - ${idade} - Criança`)
        }

    } else {
        console.log(`Mulher - ${idade} - Aposentada`);
    }
}

console.log('')
console.log('Aqui fiz o mesmo exercicio porem listando todas as alternativas com laço de repetição')

let pessoas = [
    { genero: 'masculino', idade: 74 },
    { genero: 'feminino', idade: 4 },
    { genero: 'feminino', idade: 13 },
    { genero: 'masculino', idade: 60 },
    { genero: 'masculino', idade: 19 },
    { genero: 'feminino', idade: 60 }
];

for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].genero == 'masculino') {
        if (pessoas[i].idade < 65) {

            if (idade >= 18) {
                console.log(`Homem - ${pessoas[i].idade} - Adulto`)
            } else if (pessoas[i].idade >= 13 && pessoas[i].idade <= 18) {
                console.log(`Homem - ${pessoas[i].idade} - Adolescente`);
            } else {
                console.log(`Homem - ${pessoas[i].idade} - Criança`)
            }

        } else {
            console.log(`Homem - ${pessoas[i].idade} - Aposentado`);
        }
    } else if (pessoas[i].genero == 'feminino') {
        if (pessoas[i].idade < 60) {

            if (pessoas[i].idade >= 18) {
                console.log(`Mulher - ${pessoas[i].idade} - Adulto`)
            } else if (pessoas[i].idade >= 13 && pessoas[i].idade <= 18) {
                console.log(`Mulher - ${pessoas[i].idade} - Adolescente`);
            } else {
                console.log(`Mulher - ${pessoas[i].idade} - Criança`)
            }

        } else {
            console.log(`Mulher - ${pessoas[i].idade} - Aposentada`);
        }
    }

}

console.log('')


console.log(' -     Exercicio 2     - ')
/*
2 - De acordo com o algoritmo a seguir, escolha uma das alternativas abaixo.

contador :=  3
soma  := 57
for (contador <= 10 ) {
    if (contador < 5 || contador == 8 ) {
        soma := soma - contador
    } else {
            soma = soma + contador
    }
    contador++
} 

print(“O valor da soma é ” + soma)
a) O valor da soma é 57
b) O valor da soma é 69
c) O valor da soma é 79
d) O valor da soma é 93

*/

let soma = 57;
for (contador = 3; contador <= 10;) {
    if (contador < 5 || contador == 8) {
        soma = soma - contador;
    } else {
        soma = soma + contador;
    }
    contador++
    console.log(`O valor da soma é: ${soma}`);
}

console.log('Alternativa C) O Valor da Soma é 79')