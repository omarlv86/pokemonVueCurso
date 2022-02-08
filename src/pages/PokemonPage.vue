<template>
  <h1>¿Quién es este pokémon?</h1>
  <!-- TODO: img -->
    <PokemonPicture :pokemonId="2" :showPokemon="true"/>
  <!-- TODO: Opciones -->
    <PokemonOptions :pokemons="pokemonArr"/>

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
        }
    },
    methods:{
        async mixedPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            //console.log(this.pokemonArr)
        }
    },
    mounted(){
        this.mixedPokemonArray();
    }

}
</script>

<style>

</style>