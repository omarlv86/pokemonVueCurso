<template>

  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>¿Quién es este pokémon?</h1>

        <!-- TODO: img -->
        <PokemonPicture 
            :pokemon-id="pokemon.id" 
            :showPokemon="showPokemon"
        />

        <!-- TODO: Opciones -->
        <PokemonOptions 
            :pokemons="pokemonArr"
            @selection-pokemon="checkAnswer"
        />

        <template v-if="showAnswer" class="fade-in">
            <h2>{{ message }}</h2>
            <button @click="newGame">Nuevo juego</button>
        </template>
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
            showAnswer: false,
            message: ''
        }
    },
    methods:{
        async mixedPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            //console.log(this.pokemonArr)

            const rndInt = Math.floor( Math.random() * 4 )
            //console.log(rndInt)
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnswer( pokemonId){
            //console.log('Pokemon Page llamado', pokemonId)
            this.showPokemon = true;
            this.showAnswer = true;

            if(pokemonId === this.pokemon.id){
                this.message = `Correcto, ${ this.pokemon.name }`
            }else{
                this.message = `Ooops, era ${ this.pokemon.name }`
            }
        },
        newGame(){
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixedPokemonArray()
        }
    },
    mounted(){
        this.mixedPokemonArray();
    }

}
</script>

<style>

</style>