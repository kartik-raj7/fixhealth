import { Carousel, Row } from 'antd'
import React from 'react'
import Feedbackcards from '../common/Feedbackcards'
import { feedbackdata } from '../../data/feedbackdata'
import style from '../../styles/feedback.module.scss'
import { isMobileOnly, isTablet } from 'react-device-detect'
const Feedbacksection = () => {
    const slidesToShow = isMobileOnly ? 1 : isTablet ? 2 : 3;
  return (
    <div className={style.feedback}>
        <Row className={style.feedbackheading}>Patient Recovery Stories</Row>
        <Row className={style.feedbacksubheading}>Don't just take our word for it......</Row>
        <Carousel autoplay slidesToShow={slidesToShow} className={style.feedbackcarousel}>
           {feedbackdata.map((data,index)=>(
             <Feedbackcards feedback={data} key={index}/>
           ))}    
        </Carousel>
    </div>
  )
}

export default Feedbacksection