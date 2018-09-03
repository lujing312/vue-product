import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

import Login from '@/views/Login';
import Home from '@/views/Home';

export default new Router({
  routes: [
    {name:'login',path:'/login',component:Login},
    {name:'home',path:'/',component:Home}
  ]
});
