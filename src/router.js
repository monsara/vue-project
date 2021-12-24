import VueRouter from 'vue-router';
import Home from './pages/Home';
import About from './pages/About';

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
  //   Disable hash '#'
  mode: 'history',
});
