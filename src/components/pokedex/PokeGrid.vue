<template>
    <div class="container mt-5">
        <div class="row justify-content-center mb-4">
            <h1>{{ generation.name }} Region Pokemon</h1>
        </div>
        <div class="row">
            <poke-card 
                v-for="(pokemon, index) in generation.max" 
                :key="index" :id="generation.offset + index + 1"
            >
            </poke-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PokeCard from './PokeCard';

export default {
    computed: {
        ...mapState(['generations']),

        generation() {
            return this.generations[this.$route.params.id - 1];
        }
    },

    components: {
        PokeCard
    }
}
</script>