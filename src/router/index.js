import Discover from '@/pages/discover'
import Friends from '@/pages/friends'
import Mine from '@/pages/mine'
import { Album,Artist, Recommend, Ranking, Songs, Djradio}  from "@/pages/discover/c-pages";
import { Redirect } from 'react-router'
const  routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover"></Redirect>
  },
  {
    path:'/discover',
    component:Discover,
    routes:[
      {
        path:'/discover',
        exact:true,
        render: () => <Redirect to="/discover/recommend"></Redirect>
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },

      {
        path: '/discover/songs',
        component: Songs
      },
      {
        path: '/discover/djradio',
        component: Djradio
      },
      {
        path: '/discover/album',
        component: Album
      },
    ]
  },
  {
    path: '/friend',
    component: Friends,

  },
  {
    path: '/mine',
    component: Mine
  },
]
export default routes