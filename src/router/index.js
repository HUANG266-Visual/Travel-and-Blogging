import { createRouter, createWebHistory } from 'vue-router'
import MenuBar from '../communal/menubar.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/',
    component: MenuBar,
    meta: {requiresAuth: true},
    children: [ 
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
        meta: {title: 'Home'}
      },
      {
        path:'Management/Users',
        name:'management',
        component: () => import('../views/ManagementView.vue')
      },
      {
        path:'Management/Roles',
        name:'roles', 
        component: () => import('../views/RolesView.vue')
      },
      {
        path:'Others',
        name:'others',
        component: () => import('../views/OthersView.vue')
      },
      {
        path: 'Logs',
        name: 'logs',
        component: () => import('../views/LogsView.vue'),
        meta: {title: 'Logs'}
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
