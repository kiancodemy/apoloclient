import Slider from "react-slick";
import graph from "../../assets/graph.png";
import mongo from "../../assets/mongo.png";
import react from "../../assets/physics.png";
export default function Imgcarousel() {
  const settings = {
    infinite: true,
    autoplay: true,

    speed: 4500,

    cssEase: "linear", // Ensures smooth motion
    slidesToShow: 3,
    slidesToScroll: 3, // Move 6 slides at a time
    // Prevents stop when hovered
    arrows: false,
  };

  const data = [
    { id: 1, img: graph },
    { id: 2, img: mongo },
    { id: 3, img: react },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <img
                className="h-[150px] w-full object-contain"
                src={item.img}
                alt=""
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
