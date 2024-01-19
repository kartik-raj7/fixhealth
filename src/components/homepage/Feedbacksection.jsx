import React from 'react';
import Slider from 'react-slick';
import Feedbackcards from '../common/Feedbackcards';
import { feedbackdata } from '../../data/feedbackdata';
import style from '../../styles/feedback.module.scss';
import { isMobileOnly, isTablet } from 'react-device-detect';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Feedbacksection = () => {
  const slidesToShow = isMobileOnly ? 1 : isTablet ? 2 : 3;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true, 
  };

  return (
    <div className={style.feedback}>
      <div className={style.feedbackheading}>Patient Recovery Stories</div>
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
