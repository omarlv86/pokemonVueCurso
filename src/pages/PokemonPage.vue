<template>
  <h1>¿Quién es este pokémon?</h1>
  <!-- TODO: img -->
    <PokemonPicture :pokemonId="2" :showPokemon="true"/>
  <!-- TODO: Opciones -->
    <PokemonOptions />
</template>

<script>

import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log( getPokemonOptions() )

export default {
    components:{
        PokemonOptions,
        PokemonPicture
    }

}
</script>

<style>

</style>