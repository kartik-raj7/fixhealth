import React, { useEffect, useRef, useState } from 'react'
import style from '../../styles/navbar.module.scss'
import { Button, Col, Image, Row } from 'antd';
const Navbar = () => {
  return (
    <div className={style.navbar}>
        <Row className={style.navbarrow}>
            <Col span={4}>
             <Image src='https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg' className={style.logoimage}/>
            </Col>
            <Col span={16} className={style.navbarrowoptions}>
            <Col>
             first 
            </Col>
            <Col>
            second
            </Col>
            </Col>
            <Col span={4} className={style.bookappointmentbuttondiv}>
                <Button className={style.bookbutton}>Book an Appointment</Button>
            </Col>
        </Row>
    </div>
  );
}

export default Navbar