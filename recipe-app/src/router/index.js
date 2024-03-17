import { createMemoryHistory, createRouter } from 'vue-router'
import Recipe from '../components/Recipe.vue';
import MealPlanner from '../components/MealPlanner.vue';

const routes = [
  {
    path: '/',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/mealplanner',
    name: 'MealPlanner',
    component: MealPlanner
  }
];


const router = createRouter({
    history: createMemoryHistory(),
    routes,
  });

export default router;
