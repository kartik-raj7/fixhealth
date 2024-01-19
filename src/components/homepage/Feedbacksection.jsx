import React from 'react';
import Slider from 'react-slick';
import Feedbackcards from '../common/Feedbackcards';
import { feedbackdata } from '../../data/feedbackdata';
import style from '../../styles/feedback.module.scss';
import { isMobileOnly, isTablet } from 'react-device-detect';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Feedbacksection = () => {
  const slidesToShow = isMobileOnly ? 1 : isTablet ? 2 : 3;

  // Define arrow components here
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className={style.customprevarrow} onClick={onClick}>
        <GrPrevious/>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className={style.customnextarrow} onClick={onClick}>
        <GrNext/>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    ...(isMobileOnly ? {} : { prevArrow: <CustomPrevArrow /> }),
    ...(isMobileOnly ? {} : { nextArrow: <CustomNextArrow />}),
  };

  return (
    <div className={style.feedback}>
      <div className={style.feedbackheading}><span>Testimonials</span></div>
      <div className={style.feedbacksubheading}>Don't just take our word for it......</div>
      <Slider {...settings} className={style.feedbackcarousel}>
        {feedbackdata.map((data, index) => (
          <Feedbackcards feedback={data} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default Feedbacksection;
