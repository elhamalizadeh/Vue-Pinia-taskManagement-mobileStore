import { createRouter,createWebHistory} from 'vue-router';
import Home from './components/Home.vue';
import tasks from './components/tasks.vue';
import products from './components/products.vue';
import cart from './components/cart.vue';


const routes = [{path:"/", name:"HomePage" , component :Home},
{path:"/tasks", name:"tasks" , component :tasks},
{path:"/products", name:"products" , component :products},
{path:"/cart", name:"cart" , component :cart}];

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;