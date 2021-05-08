import React, { memo } from 'react'
import { HeaderWrapped, HeaderLeft, HeaderRight } from  './style'
import { NavLink } from "react-router-dom";
import { headerLinks } from "@/common/local-data";
import { Input } from 'antd';
import { SearchOutlined } from "@ant-design/icons";

export default memo(function AppHeader() {
  function mapLinks(item,index){
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }
  return (
    <HeaderWrapped>
      <div className="wrap-v1 content">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            { headerLinks.map((item,i)=>{
              return (
                <div key={item.title} className="select-item">
                  { mapLinks(item, i) }
                </div>
                )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="请输入" prefix={<SearchOutlined />}></Input>
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapped>
  )
})
