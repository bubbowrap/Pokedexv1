<template>
      <div class="modal fade" :id="pokemon.name" tabindex="-1" role="dialog" aria-labelledby="pokemonDetails" aria-hidden="true" :data-pokemodal="pokemon.name">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title text-center" id="exampleModalLabel">{{pokemon.name}}</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row align-items-center">
                        <div class="col-12 text-center mb-2">                    
                            <img class="card-img" :src="image_src" alt="Card image cap">
                        </div>
                        <div class="col-12">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Type: </strong><template v-for="(type, index) in pokemon.types"><span :key="index">{{type.type.name}}<span v-if="index < pokemon.types.length - 1">, </span></span></template></li>
                                <li class="list-group-item"><strong>Height: </strong> {{pokemon.height}} decimetres</li>
                                <li class="list-group-item"><strong>Weight: </strong> {{pokemon.weight}} hectograms</li>
                                <li class="list-group-item"><strong>Top Moves: </strong><template v-for="(move, index) in pokemon.moves"><span v-if="index < 10" :key="index">{{move.move.name}}<span v-if="index < 9">, </span></span></template></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['pokemon', 'pokeID', 'image_src']
}
</script>

<style lang="scss" scoped>
    .card-img {
        max-width: 50%;
    }
    .modal-title {
        width: 100%;
    }
</style>