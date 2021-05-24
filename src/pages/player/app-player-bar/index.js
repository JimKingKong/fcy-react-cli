import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getSongDetailAction } from "../store/actionCreators";
import { Slider } from 'antd';
import { NavLink } from 'react-router-dom';
import { getSizeImage,formatMinuteSecond,getPlaySong } from "@/utils/format-utils";
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

export default memo(function HYAppPlayerBar() {
  // props state
  const [currentTime, setCurrentTime] = useState(0)
  const [progressValue, setProgressValue] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  // redux hooks
  const dispatch = useDispatch()
  const songDetail = useSelector(state => state.getIn(['player','songDetail']),shallowEqual)
  
  // other hooks
  useEffect(() => {
    dispatch(getSongDetailAction({ids:'167876'}))
  }, [dispatch])
  const audioRef = useRef()
  

  // dependency
  const picUrl = (songDetail.al && songDetail.al.picUrl) || ''
  const singerName = (songDetail.ar && songDetail.ar[0].name) || '未知歌手'
  const showDuration = formatMinuteSecond(songDetail.dt) || 0
  const showCurrentTime = formatMinuteSecond(currentTime) || '00:00'
  const duration = songDetail.dt || 0

  // events
  const audioPlay = (e)=>{
    audioRef.current.src = getPlaySong('167876')
    audioRef.current.play()
  }

  const timeUpdate = (e)=>{
    if(isSliding) return
    setCurrentTime(e.target.currentTime*1000)
    setProgressValue(e.target.currentTime*1000/duration*100)
  }
  const progressAfterChange = useCallback((value)=>{
    isSliding && setIsSliding(false)
    const audioCurrentTime = value/100*duration/1000 // audio接收秒为单位
    setCurrentTime(value/100*duration)
    audioRef.current.currentTime = audioCurrentTime 
  },[duration,isSliding])

  const progressChange = useCallback((value)=>{
    !isSliding && setIsSliding(true)
    setProgressValue(value)
    setCurrentTime(value/100*duration)
  },[duration,isSliding])

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev" 
                  ></button>
          <button className="sprite_player play" 
                  onClick={e=>audioPlay()}
                  ></button>
          <button className="sprite_player next"
                  ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img alt="" src={getSizeImage(picUrl,35)} />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name"></span>
              <a href="#/" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider 
                value={progressValue}
                onAfterChange={e=>progressAfterChange(e)}
                onChange={e=>progressChange(e)}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
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
      <audio ref={audioRef} onTimeUpdate={timeUpdate}/>
    </PlaybarWrapper>
  )
});
