import React from 'react'
import style from '../../styles/homepagehero.module.scss'
import { Col, Image, Row } from 'antd'
const Hero = () => {
  return (
    <div className={style.hero}>
    <Row className={style.herorow}>
        <Col xs={24}  lg={12} className={style.heroleftsection}>
            <Row className={style.heroheading}>Elevate Your Health with FixHealth</Row>
            <Row className={style.herosubheading}>
            Experience a Comprehensive Approach to Health at FixHealth, where our dedicated team of professionals combines expert physiotherapy and personalized doctor consultations to ensure your journey to well-being is seamless and effective. Your path to optimal health begins with FixHealth – because your wellness matters.
            </Row>
        </Col>
        <Col xs={24}  lg={12} className={style.herorightsection}>
        <Image src='/min.png' preview={false}/>
        </Col>
    </Row>
    </div>
  )
}

export default Hero