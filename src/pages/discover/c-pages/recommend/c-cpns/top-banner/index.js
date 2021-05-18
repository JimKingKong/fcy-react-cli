import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { shallowEqual, useDispatch, useSelector} from "react-redux";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { Carousel } from 'antd';
import { getBannerAction } from "../../store/actionCreators";
const TopBanner = memo(function () {
  const [currentIndex, setCurrentIndex] = useState(0)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBannerAction())
  }, [dispatch])
  const ref = useRef()
  const bannerList = useSelector(state => state.getIn(['recommend','topBanners']),shallowEqual) || []
  console.log(bannerList)
  const beforeChange = useCallback(
    (from,to) => {
      setCurrentIndex(to)
    },[]
  )
  const bgImage = bannerList[currentIndex] && bannerList[currentIndex].imageUrl+"?imageView&blur=40x20"
  return (
    <BannerWrapper bgImage={bgImage}>
      {/* 轮播图 */}
      <div className="wrap-v2 banner">
        <BannerLeft>
          <Carousel autoplay effect="fade" ref={ref} beforeChange={beforeChange}>
            {bannerList.map((item)=>{
              return <div class="banner-item">
                <img class="image" alt={1} src={item.imageUrl}></img>
                {item.imageUrl}
              </div>
            })}
          </Carousel>
        </BannerLeft>

        {/* 右边 */}
        <BannerRight></BannerRight>

        {/* 控制按钮 */}
        <BannerControl>
          <div className="btn left" onClick={e=>ref.current.prev()}></div>
          <div className="btn right" onClick={e => ref.current.next()}></div>
        </BannerControl>

      </div>
    </BannerWrapper>
  )
})

export default TopBanner