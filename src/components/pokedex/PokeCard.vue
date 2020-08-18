<template>
    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 col-xs-1q2 mb-4">
        <div class="card text-center" 
            data-toggle="modal" 
            :data-target="'#' + pokemon.name"  
            :data-pokemodal="pokemon.name"
        >
            <img class="card-img-top" 
                :src="image_src" 
                :alt="pokemon.name"
            />
            <div class="card-body">
                <h5 class="card-title">{{ pokemon.name }}</h5>
                <p class="card-text">{{ pokeID }}</p>
            </div>
        </div>
        <poke-modal 
            :pokemon="pokemon" 
            :pokeID="pokeID" 
            :id="id">
        </poke-modal>
    </div>
</template>

<script>
import axios from 'axios';
import PokeModal from './PokeModal.vue';

export default {
    
    data() {
        return {
            pokemon: '',
            image_src: ''
        }
    },

    components: {
        PokeModal
    },

    props: {
        id: {
            type: Number,
            default: null
        }
    },

    computed: {
        pokeID() {
            return this.id.toString().length === 1 ? `#00${this.id}` : this.id.toString().length === 2 ? `#0${this.id}` : `#${this.id}`;
        }
    },

    created() {
        const ENDPOINT = 'https://pokeapi.co/api/v2';
        axios.get(`${ENDPOINT}/pokemon/${this.id}`)
            .then(res => {
                this.pokemon = res.data;
                this.pokemon.name = this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.substr(1, this.pokemon.name.length);
                this.image_src = res.data.sprites.front_default;
            })
            .catch(err => err);
    }
}
</script>

<style lang="scss">
    img {
        max-width: 100%;
        margin: 0 auto;
        width: fit-content;
    }

    .card-img-top {
        width: auto;
        padding: 1rem 1rem 0;
    }
    
    .card-title {
        margin-bottom: 0.25rem;
    }

    .card-text {
        color: #dc3545;
    }

    .card {
        cursor: pointer;
        transition: all .15s ease;

        &:hover {
            background: #efefef;
        }
    }

    .card-body {
        padding-top: 0;
    }
</style>