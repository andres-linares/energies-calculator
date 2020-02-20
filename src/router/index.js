import Home from '@/components/Home.vue'
import CableScreen from '@/features/cables/ui/CableScreen.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/panels/',
    name: 'panels',
    component: Home
  },
  {
    path: '/demands/',
    name: 'demands',
    component: Home
  },
  {
    path: '/cables/',
    name: 'cables',
    component: CableScreen
  }
]
