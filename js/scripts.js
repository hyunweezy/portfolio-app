let pokemonRepository = (function() {
    let repository = [
            {name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
            {name: 'Ivysaur', height: 1.0, types: ['grass', 'poison']},
            {name: 'Venusaur', height: 2.0, types: ['grass', 'poison']},
            {name: 'Charmander', height: 0.6, types: ['fire']},
            {name: 'Charmeleon', height: 1.1, types: ['fire']},
            {name: 'Charizard', height: 1.7, types: ['fire', 'flying']},
            {name: 'Squirtle', height: 0.5, types: ['water']},
            {name: 'Wartortle', height: 1.0, types: ['water']},
            {name: 'Blastoise', height: 1.6, types: ['water']},
        ]

    function add(pokemon) {
        if (
            typeof pokemon === 'object' && 
            'name' in pokemon &&
            'height' in pokemon &&
            'types' in pokemon
        ) {
            repository.push(pokemon);
        } else {
            console.log('Pokemon is not correct');
        }
    }

    function getAll() {
        return repository;
    }

    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {
        console.log(pokemon.name)
    }

    return{
        add: add,
        getAll: getAll,
        addListItem: addListItem,
    };

})();   

pokemonRepository.add({name: 'Pikachu', height: 0.3, types: ['electric']});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
});

// secondary list for testing

// let pokemonList2 = [
//     {name: 'Bulba', height: '0.7', types: ['grass', 'poison']},
//     {name: 'Ivy', height: '1.0', types: ['grass', 'poison']},
//     {name: 'Venu', height: '2.0', types: ['grass', 'poison']},
//     {name: 'Charman', height: '0.6', types: ['fire']},
//     {name: 'Charmel', height: '1.1', types: ['fire']},
//     {name: 'Chariz', height: '1.7', types: ['fire', 'flying']},  
//     {name: 'Squirt', height: '0.5', types: ['water']},
//     {name: 'Wartort', height: '1.0', types: ['water']},
//     {name: 'Blast', height: '1.6', types: ['water']},
// ]

// improves composition of for loop (need to revise to accomodate objects vs strings)

// function getHeightDescription(height) {
//     return height;
// }
// function getTypeDescription(types) {
//     return types;
// }
// function getPokemonDescription(pokemon) {
//     let heightDescription = getHeightDescription(pokemon.height);
//     let typeDescription = getTypeDescription(pokemon.types);
//     return pokemon.name + ', ' + heightDescription + ', ' + typeDescription;
// }

// this is Object.keys() function that creates an array of all the keys in the object 
// pokemonList. this only executes when array is in bracket notation.

// Object.keys(pokemonList2).forEach(function(property) {
//     document.write(property + ': ' + pokemonList2[property] + '<br>');
// });

// this is an internal anonymous function

// pokemonList.forEach(function(name, index, array) {
//     console.log(name, index + array);
// })

// this forEach() function to loop over an array of objects

// pokemonList.forEach(function(pokemon) {
//     if (pokemon.height > 1.1)
//         sizeDescription = ' - Wow, that\'s big!';
//         document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')' + sizeDescription + '</xp>')
//     } else {
//         document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')' + '</p>')
//     }
// });

// this utilizes function declaration with parameters and is then called

// function printArrayDetails(list) {
//     for (let i = 0; i < list.length; i++) {
//         if(list[i].height > 1.1){
//             sizeDescription = ' - Wow, that\'s big!';
//             document.write('<p>' + list[i].name + ' (height: ' + list[i].height + ')' + sizeDescription + '</p>')
//         }
//         else{
//             document.write('<p>' + list[i].name + ' (height: ' + list[i].height + ')</p>')
//         }
//     }
// }
// printArrayDetails(pokemonList2);