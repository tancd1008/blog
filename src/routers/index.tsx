import Dashboard from '../pages/admin/Dashboard'
import Home from '../pages/clients/Home'

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
]
const privateRoutes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
]
export { publicRoutes, privateRoutes }
