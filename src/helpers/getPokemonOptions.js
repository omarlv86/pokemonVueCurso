
const getPokemons = () => {

    const pokemonArr = Array.from( Array(650) )

    return pokemonArr.map( ( _ , index) => index + 1)
}

const getPokemonOptions = () => {

    const mixedPokemons = getPokemons()
                            .sort( () => Math.random() - 0.5 )
    //console.log(mixedPokemons)
    getPokemonNames( mixedPokemons.splice(0,4))
}

const getPokemonNames = ( [a,b,c,d]= [] ) =>{
    console.log(a,b,c,d)
}
export default getPokemonOptions