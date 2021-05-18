import React, { memo } from 'react'
import { renderRoutes } from "react-router-config";
import routes from '@/router'
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import Player from "@/pages/player/app-player-bar";

import { BrowserRouter } from 'react-router-dom';
import store from "@/store/store";
import { Provider } from "react-redux";
export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppHeader/>
          {renderRoutes(routes)}
        <AppFooter/>
        <Player></Player>
      </BrowserRouter>
    </Provider>
  )
})
