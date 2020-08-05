import Vue from 'vue'
import VueRouter from 'vue-router'
import Title from '../components/Title'
import Left from '../views/Left'
import Right from '../views/Right'
import Detail from '../views/Detail'
import DetailRight from '../views/Detail-right'
import DetailRightTwo from '../views/Detail-right-two'
import DetailRightThree from '../views/Detail-right-three'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Title',
    component: Title,
      children:[{
        path:'/:type_id',
        components:{
          Left,
          Right
        }
      },{
        path:"/:type_id/detail/:id",
        components:{
          Detail,
          DetailRight,
          DetailRightTwo,
          DetailRightThree
        }
      }]                                                        
  } 
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
