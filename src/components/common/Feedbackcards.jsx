import { Image, Row } from 'antd'
import React from 'react'
import style from '../../styles/feedbackcard.module.scss'
const Feedbackcards = () => {
  return (
    <div className={style.feedbackcardwrapper}>
    <div className={style.feedbackcard}>
        <Image/>
        <Row>Name</Row>
        <Row>Designation</Row>
        <Row>Feedback stars</Row>
        <Row>Feedback description</Row>
    </div>
    </div>
  )
}

export default Feedbackcards