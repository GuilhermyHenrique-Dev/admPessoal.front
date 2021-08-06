import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name:  'home',
      component: () => import('@/views/Home.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          text: 'Home',
          component: () => import('@/views/Dashboard.vue')
        },
        {
          path: '/dividas',
          name: 'dividas',
          text: 'Dividas',
          component: () => import('@/views/Dividas.vue')
        },
        {
          path: '/financas',
          name: 'financas',
          text: 'Financas',
          component: () => import('@/views/Financas.vue')
        },
        {
          path: '/investimentos',
          name: 'investimentos',
          text: 'Investimentos',
          component: () => import('@/views/Investimentos.vue')
        },
        {
          path: '/ativos',
          name: 'ativos',
          text: 'Ativos',
          component: () => import('@/views/Ativos.vue')
        },
        {
          path: '/configuracao',
          name: 'configuracao',
          text: 'Configuração',
          component: () => import('@/views/Configuracao.vue')
        },
      ]
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
