const name = 'Gustavo';

// Não pode alterar o valor
//name = 'Gustavo';

const user = {
    name: 'Gustavo'
};

//Mas se for um objeto, pode trocar suas propriedades
user.name = 'outro nome';

//Não pode fazer o objeto "apontar" para outro lugar
/*user = {
    name: 'Gustavo'
};*/

const persons = ['Pedro', 'Gustavo', 'Jennifer'];

//Pode adicionar novos itens
persons.push('Lívia');
//['Pedro', 'Gustavo', 'Jennifer', 'Lívia']

//Pode remover algum item
persons.shift();
//['Gustavo', 'Jennifer', 'Lívia']

//Pode alterar diretamente
persons[1] = 'Loraine';
//['Gustavo', 'Loraine', 'Lívia']

console.log('\nArray após as alterações: ', persons);