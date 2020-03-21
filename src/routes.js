import GenList from './components/pokedex/GenList.vue';
import PokeGrid from './components/pokedex/PokeGrid.vue';

export const routes = [
    { path: '/', component: GenList },
    { path: '/generation/:id', component: PokeGrid },
    { path: '*', redirect: '/' }

];