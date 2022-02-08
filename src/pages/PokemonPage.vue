<template>

  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>¿Quién es este pokémon?</h1>
    
    <!-- TODO: img -->
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>

    <!-- TODO: Opciones -->
        <PokemonOptions :pokemons="pokemonArr"/>
  </div>

</template>

<script>

import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from '@/helpers/getPokemonOptions'

/* console.log( getPokemonOptions() ) */



export default {
    components:{
        PokemonOptions,
        PokemonPicture
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
        }
    },
    methods:{
        async mixedPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            //console.log(this.pokemonArr)

            const rndInt = Math.floor( Math.random() * 4 )
            //console.log(rndInt)
            this.pokemon = this.pokemonArr[ rndInt ]
        }
    },
    mounted(){
        this.mixedPokemonArray();
    }

}
</script>

<style>

</style>