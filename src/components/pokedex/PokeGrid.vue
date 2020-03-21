<template>
    <div class="container mt-4">
        <div class="row justify-content-center mb-4">
            <h1>{{$store.state.generations[this.$route.params.id - 1].name}} Region Pokemon</h1>
        </div>
        <div class="row">
        <poke-card v-for="(pokemon, index) in genLimit" :key="index" :id="genOffset + index + 1"></poke-card>

    </div>
  </div>
</template>

<script>
import PokeCard from './PokeCard';

export default {
    data() {
        return {
            genOffset: this.$store.state.generations[this.$route.params.id - 1].offset,
            genLimit: this.$store.state.generations[this.$route.params.id - 1].max,
        }
    },
    props: ["generationName"],
    components: {
        PokeCard
    },
    created() {
        this.$store.dispatch('getApi', {gen: this.$route.params.id, offset: this.genOffset, max: this.genLimit});
    }
}
</script>

<style>

</style>