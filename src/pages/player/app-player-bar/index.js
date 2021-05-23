import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getSongDetailAction } from "../store/actionCreators";
import { Slider } from 'antd';
import { NavLink } from 'react-router-dom';
// import { getSongDetail } from "@/services/player";
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

export default memo(function HYAppPlayerBar() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongDetailAction({ids:'167876'}))
  }, [dispatch])

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"
                  ></button>
          <button className="sprite_player play" 
                  ></button>
          <button className="sprite_player next"
                  ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name"></span>
              <a href="#/" className="singer-name"></a>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="now-time">{}</span>
                <span className="divider">/</span>
                <span className="duration">{}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio />
    </PlaybarWrapper>
  )
});
