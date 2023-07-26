import React ,{useEffect, useState} from "react";
import "./Slider.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import img1 from "../images/pexels-martin-péchy-312197.jpg";
import img2 from "../images/pexels-serafettin-ünye-17694350.jpg";
import img3 from "../images/pexels-wilson-vitorino-14528190.jpg";

const Slider = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const sliderHandler = (type) => {
    if( type === "left") {
      setImgIndex(imgIndex > 0 ? imgIndex-1 : 2);
    } else {
      setImgIndex(imgIndex < 2 ? imgIndex+1 : 0);
    }
  }

  useEffect(()=> {    
    let timer;
    timer = setInterval(()=> {
      setImgIndex(imgIndex < 2 ? imgIndex+1 : 0);
    },4000)
    
    return ()=> {
      clearInterval(timer);
    }
  },[imgIndex])

  return (
    <div className="sliderContainer">
      <div className="left_arrow" onClick={() => sliderHandler("left")}>
        <ChevronLeftIcon />
      </div>
      <div className="sliderImageContainer" style={{transform: `translateX(-${imgIndex}00%)`}}>
        <div className="slide">
          <img src={img1} alt="" />
        </div>
        <div className="slide">
        <img src={img2} alt="" />
        </div>
        <div className="slide">
        <img src={img3} alt="" />
        </div>
      </div>
      <div className="right_arrow" onClick={() => sliderHandler("right")}>
        <ChevronRightIcon />
      </div>
      <div className="progressBar">
         <div className={`${imgIndex === 0 ? "activeBar" : "bar" }`} ></div>
         <div className={`${imgIndex === 1 ? "activeBar" : "bar"}`}></div>
         <div className={`${imgIndex === 2 ? "activeBar" : "bar"}`}></div>
      </div>
    </div>
  );
};

export default Slider;
