import { Image, Row } from 'antd'
import React from 'react'
import style from '../../styles/feedbackcard.module.scss'
import{Rate} from 'antd'
const Feedbackcards = ({feedback}) => {
const feedbackdata = feedback;
  return (
    // <div className={style.feedbackcardwrapper}>
    <div className={style.feedbackcard}>
        <Image src={feedbackdata.cust_img} preview={false} className={style.feedbackcustimage}/>
        <Row className={style.feedbackcustname}>{feedbackdata.cust_name}</Row>
        <Row className={style.feedbackcustoccupation}>{feedbackdata.cust_occupation}</Row>
        <Row className={style.feedbackcustrating}><Rate disabled defaultValue={feedbackdata.feedback_rating} /></Row>
        <Row className={style.custfeedback}>{feedbackdata.cust_feedback}</Row>
    </div>
    // </div>
  )
}

export default Feedbackcards