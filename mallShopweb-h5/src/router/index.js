import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Categroy= () => import('../views/categroy/Categroy.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')
const Login = () => import('../views/login/Login.vue')

Vue.use(Router)


const routes=[
  { path: '', 
    redirect: '/home'
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/categroy',
    component:Categroy
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  },
   {
    path:'/login',
    component:Login
  }

]
export default new Router({
  routes,
  mode:'history'
})
