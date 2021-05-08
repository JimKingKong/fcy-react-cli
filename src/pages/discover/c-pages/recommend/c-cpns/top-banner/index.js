import React, { memo } from 'react'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl} from './style'
import { Carousel } from 'antd';
const TopBanner = memo(function () {
  return (
    <BannerWrapper>
      {/* 轮播图 */}
      <div className="wrap-v2 banner">
        <BannerLeft>
          <Carousel autoplay effect="fade">
            <div>1</div>
            <div>12</div>
            <div>13</div>
          </Carousel>
        </BannerLeft>

        {/* 右边 */}
        <BannerRight></BannerRight>

        {/* 控制按钮 */}
        <BannerControl>
          <div className="btn left"></div>
          <div className="btn right"></div>
        </BannerControl>

      </div>
    </BannerWrapper>
  )
})
export default TopBanner