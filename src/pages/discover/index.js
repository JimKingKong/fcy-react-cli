import React, { memo } from 'react'
import { renderRoutes } from "react-router-config";
import { DiscoverWrapper, TopMenu } from "./style";
import { dicoverMenu } from "@/common/local-data";
import { NavLink } from 'react-router-dom';
export default memo(function Discover(porps) {

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item,index)=>{
              return <div className="item" key={item.title}>
                <NavLink to={`/discover${item.link}`}>{item.title}</NavLink>
                </div>
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(porps.route.routes)}
    </DiscoverWrapper>
  )
})
