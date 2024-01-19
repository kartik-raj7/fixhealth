import React from 'react'
import style from '../../styles/homepagehero.module.scss'
import { Col, Image, Row } from 'antd'
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect'
const Hero = () => {
  return (
    <div className={style.hero}>
    <Row className={style.herorow}>
        <Col xs={24}  lg={12} className={style.heroleftsection}>
        <Row className={style.heroheading}>
        <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString(
      '<span>Elevate Your Health with <span>Fix<span class="' + style.healthtext + '">Health</span></span></span>'
    )
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .start();
  }}
/>

  
</Row>
            <Row className={style.herosubheading}>
            <span>Experience a Comprehensive Approach to Health at <span className={style.fixhealthtext}><span className={style.fixtext}>Fix</span>Health</span>, where our dedicated team of professionals combines expert physiotherapy and personalized doctor consultations to ensure your journey to well-being is seamless and effective. Your path to optimal health begins with <span className={style.fixhealthtext}><span className={style.fixtext}>Fix</span>Health</span> – because your wellness matters.</span>
            </Row>
        </Col>
        <Col xs={24}  lg={12} className={style.herorightsection}>
        <motion.div
      animate={{ y: [-10, 10, -10], transition: { duration: 2, repeat: Infinity } }}
    >
      <Image src='/min.png' preview={false} />
    </motion.div>
        </Col>
    </Row>
    </div>
  )
}

export default Hero