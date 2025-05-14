
import './Testimonial.css';
import stars from '../../assets/Group 1118.png';
import car from '../../assets/car4.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonialData = [
  {
    text: "I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience.",
    name: "Annie Rudy",
    location: "Las Vegas",
    image: car
  },
  {
    text: "I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience.",
    name: "Annie Rudy",
    location: "Las Vegas",
    image: car
  },
  {
    text: "I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience.",
    name: "Annie Rudy",
    location: "Las Vegas",
    image: car
  },
  {
    text: "I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience.",
    name: "Annie Rudy",
    location: "Las Vegas",
    image: car
  },
  {
    text: "I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience.",
    name: "Annie Rudy",
    location: "Las Vegas",
    image: car
  },
  // Add more testimonials as needed
];

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='testimonial-container'>
      <div className='tstm-tittle'>
        <div className='tstm-big-tittle'>
          <p className='p-tstm-big-tittle'>TESTIMONIALS</p>
        </div>
        <div className='tstm-small-tittle'>
          <p className='p-tstm-small-tittle'>Testimonials</p>
        </div>
      </div>
      <div className="testimonial-slider" >
      <Slider {...settings}>
        {testimonialData.map((testimonial, index) => (
          <div key={index} className='tstm-discription'>
            <div>
              <p className='p-tstm-discription'>
                {testimonial.text}
              </p>
            </div>
            <div className='5-star'>
              <img className='star-img' src={stars} alt="Stars" />
              <p className='tstm-name'>{testimonial.name}</p>
              <p className='tstm-adress'>{testimonial.location}</p>
            </div>
          </div>
        ))}
      </Slider>
      <img className='tstm-img' src={car} alt="Car" />
      </div>
    </div>
  );
}

export default Testimonial;
