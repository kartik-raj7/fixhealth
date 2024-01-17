import { Carousel, Row } from 'antd'
import React from 'react'
import Feedbackcards from '../common/Feedbackcards'
import style from '../../styles/feedback.module.scss'
const Feedbacksection = () => {
  return (
    <div className={style.feedback}>
        <Row className={style.feedbackheading}>Patient Recovery Stories</Row>
        <Carousel autoplay>
            <Feedbackcards/>
            <Feedbackcards/>
            <Feedbackcards/>
            <Feedbackcards/>
            <Feedbackcards/>
            <Feedbackcards/>
            <Feedbackcards/>
            <Feedbackcards/>
            <Feedbackcards/>

        </Carousel>
    </div>
  )
}

export default Feedbacksection