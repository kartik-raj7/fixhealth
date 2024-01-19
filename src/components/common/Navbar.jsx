import React, { useEffect, useRef, useState } from 'react'
import style from '../../styles/navbar.module.scss'
import { Button, Col, Image, Row } from 'antd';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className={style.navbar}>
        <Row className={style.navbarrow}>
            <Col xs={8} xl={4}>
             <Image src='https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg' className={style.logoimage}/>
            </Col>
            <Col xs={8} xl={16} className={style.navbarrowoptions}>
            <Col>
             
            </Col>
            <Col>
            
            </Col>
            </Col>
            <Col xs={5} xl={4} className={style.bookappointmentbuttondiv}>
            <Link to="bookappointment" smooth={true} duration={500}>
  <Button className={style.bookbutton}>Book an Appointment</Button>
</Link>
            </Col>
        </Row>
    </div>
  );
}

export default Navbar