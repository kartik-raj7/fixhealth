import { Typography, Row, Col, Image, Space } from 'antd';
import { CiInstagram, CiLinkedin, CiTwitter } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { Element } from 'react-scroll';
import style from '../../styles/footer.module.scss';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
      <Element id="footer">
        <div className={style.footer}>
          <Row className={style.footersub}>
            <Col style={{width:'80%'}}
            >
              <Row style={{width:'100%'}}>
                <Col xs={24} md={8}>
                  <Space direction="vertical">
                    <Row align="middle" gutter={8}>
                      <Image src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg" height={100} width={150} />
                    </Row>
                    <Typography.Text className={style.text}>
                      Elevating your health with Fix Health
                    </Typography.Text>
                  </Space>
                </Col>
                <Col xs={24} md={8} className={style.quicklinksfooter}>
                  <Space direction="vertical" size={8}>
                    <Space direction="vertical" className={style.listItem}>
                      <Link to="/">
                        <Typography.Text className={style.footernavlinks}>Product</Typography.Text>
                      </Link>
                      <Link href="/">
                        <Typography.Text className={style.footernavlinks}>Blogs</Typography.Text>
                      </Link>
                    </Space>
                    <Space direction="vertical" className={style.listItem}>
                      <Link href="/">
                        <Typography.Text className={style.footernavlinks}>
                          Terms & Conditions
                        </Typography.Text>
                      </Link>
                      <Link href="/">
                        <Typography.Text className={style.footernavlinks}>Privacy Policy</Typography.Text>
                      </Link>
                    </Space>
                  </Space>
                </Col>
                <Col xs={24} md={8} className={style.quicklinksfooter}>
                  <Space direction="vertical" size={8}>
                    <Space direction="vertical" className={style.listItem}>
                      <Link to="/">
                        <Typography.Text className={style.footernavlinks}>About Us</Typography.Text>
                      </Link>
                      <Link to="/">
                        <Typography.Text className={style.footernavlinks}>Company</Typography.Text>
                      </Link>
                      <Link href="/">
                        <Typography.Text className={style.footernavlinks}>Career</Typography.Text>
                      </Link>
                    </Space>
                    <Space direction="vertical" className={style.listItem}>
                      <Link href="/">
                        <Typography.Text className={style.footernavlinks}>
                          Contact us
                        </Typography.Text>
                      </Link>
                     
                    </Space>
                  </Space>
                </Col>
                <Col xs={24} md={8} style={{paddingTop:'15px'}}>
                  <Space direction="vertical" className={style.listItem}>
                    <Space direction="horizontal" className={style.socialbox}>
                      <Link href="/">
                        <CiLinkedin className={style.socials} />
                      </Link>
                      <Link href="/">
                        <CiTwitter className={style.socials} />
                      </Link>
                      <Link href="/">
                        <CiInstagram className={style.socials} />
                      </Link>
                      <Link href="/">
                        <FaWhatsapp className={style.socials} />
                      </Link>
                    </Space>
                  </Space>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Element>
    );
  };
  
  export default Footer;
  