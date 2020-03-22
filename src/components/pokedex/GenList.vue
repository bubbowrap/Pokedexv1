<template>
    <div class="col-md-6 text-center">
        <h1 class="mt-5 mb-4">Choose a Generation</h1>
        <div class="list-group">
            <a class="list-group-item list-group-item-action" 
            @click="goToPage(generation.id)"  
            v-for="generation in $store.state.generations" 
            :key="generation.id"><strong>{{ generation.name }}</strong> (Gen. {{ generation.id }})</a>

        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            
        }
    },
    methods: {
        goToPage(id) {
            this.$router.push(`/generation/${id}`);
        },

    }
}
</script>

<style scoped>
    .list-group-item {
        cursor: pointer;
    }
</style>