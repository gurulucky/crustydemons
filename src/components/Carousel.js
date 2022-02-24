import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Image} from 'react-bootstrap'

import NFT1 from '../assets/images/1.png'
import NFT2 from '../assets/images/2.png'
import NFT3 from '../assets/images/3.png'
import NFT4 from '../assets/images/4.png'
import NFT5 from '../assets/images/5.png'
import NFT6 from '../assets/images/6.png'
import NFT7 from '../assets/images/7.png'
import NFT8 from '../assets/images/8.png'
import NFT9 from '../assets/images/9.png'
import NFT10 from '../assets/images/10.png'

const Carousel = () => {

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='content'>
      <Slider {...sliderSettings}>
        <div className="gallery_outline">
          <Image src={NFT1} alt="1" />
        </div>
        <div className="gallery_outline">
          <Image src={NFT2} alt="2" />
        </div>
        <div className="gallery_outline">
          <Image src={NFT3} alt="3" />
        </div>
        <div className="gallery_outline">
          <Image src={NFT4} alt="4" />
        </div>
        <div className="gallery_outline">
          <Image src={NFT5} alt="5" />
        </div>
        <div className="gallery_outline">
          <Image src={NFT6} alt="6" />
        </div>
        <div className="gallery_outline">
          <Image src={NFT7} alt="7" />
        </div>
        <div className="gallery_outline">
          <Image src={NFT8} alt="8" />
        </div>
        <div className="gallery_outline">
          <Image src={NFT9} alt="9" />
        </div>
        <div className="gallery_outline">
          <Image src={NFT10} alt="10" />
        </div>
      </Slider>
    </div>
  );
};
export default Carousel;
