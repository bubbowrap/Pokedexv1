<template>
 <div class="col-xl-2 col-lg-3 col-sm-4 mb-4">
      <div class="card text-center">
        <img class="card-img-top" :src="image_src" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{pokemon}}</h5>
            <p class="card-text">{{pokeID}}</p>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    
    data() {
        return {
            pokemon: null,
            image_src: null
        }
    },
    props: ['id'],
    computed: {
        pokeID() {
            return this.id.toString().length === 1 ? `#00${this.id}` : this.id.toString().length === 2 ? `#0${this.id}` : `#${this.id}`;
        }
    },
    mounted() {
        const ENDPOINT = 'https://pokeapi.co/api/v2';
        axios.get(`${ENDPOINT}/pokemon/${this.id}`)
            .then(res => {
                this.pokemon = res.data.name;
                this.image_src = res.data.sprites.front_default;
            })
            .catch(err => console.log(err));
    }

    
}
</script>

<style>

</style>