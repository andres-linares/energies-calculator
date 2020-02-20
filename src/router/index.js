import Home from '@/components/Home.vue'
import CableScreen from '@/features/cables/ui/CableScreen.vue'
import DemandsScreen from '@/features/demands/ui/DemandsScreen.vue'
import PanelsScreen from '@/features/panels/ui/PanelsScreen.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/paneles/',
    name: 'panels',
    component: PanelsScreen
  },
  {
    path: '/demanda/',
    name: 'demands',
    component: DemandsScreen
  },
  {
    path: '/cables/',
    name: 'cables',
    component: CableScreen
  }
]
