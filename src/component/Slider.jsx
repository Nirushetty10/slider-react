import React ,{useEffect, useState} from "react";
import "./Slider.scss";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import img1 from "../images/1086262438_All types of Millets_ _xl-beta-v2-2-2.png";
// import img2 from "../images/11328967_Healthy vegetarian diet food for sport personaliti_xl-beta-v2-2-2.png";
import img3 from "../images/1577263946_Healthy diet food for sport personalities both Veg_xl-beta-v2-2-2.png";
import img4 from "../images/4135718553_Healthy diet food for sport personalities both Veg_xl-beta-v2-2-2.png";
import img5 from "../images/718383224_Fruit juices & Milk _ _xl-beta-v2-2-2.png";
import img6 from "../images/814917288_Healthy vegetarian diet food for sport personaliti_xl-beta-v2-2-2.png";

const Slider = () => {
  const [imgIndex, setImgIndex] = useState(0);

  // const sliderHandler = (type) => {
  //   if( type === "left") {
  //     setImgIndex(imgIndex > 0 ? imgIndex-1 : 2);
  //   } else {
  //     setImgIndex(imgIndex < 2 ? imgIndex+1 : 0);
  //   }
  // }

  useEffect(()=> {    
    let timer;
    timer = setInterval(()=> {
      setImgIndex(imgIndex < 5 ? imgIndex+1 : 0);
    },4000)
    
    return ()=> {
      clearInterval(timer);
    }
  },[imgIndex])

  return (
    <div className="sliderContainer">
      {/* <div className="left_arrow" onClick={() => sliderHandler("left")}>
        <ChevronLeftIcon />
      </div> */}
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
        <div className="slide">
        <img src={img4} alt="" />
        </div>
        <div className="slide">
        <img src={img5} alt="" />
        </div>
        <div className="slide">
        <img src={img6} alt="" />
        </div>
      </div>
      {/* <div className="right_arrow" onClick={() => sliderHandler("right")}>
        <ChevronRightIcon />
      </div> */}
      <div className="progressBar">
         <div className={`${imgIndex === 0 ? "activeBar" : "bar" }`} >
          {imgIndex === 0 && <div  className="progress-fill"></div>}
         </div>
         <div className={`${imgIndex === 1 ? "activeBar" : "bar"}`}>
         {imgIndex === 1 && <div  className="progress-fill"></div>}
         </div>
         <div className={`${imgIndex === 2 ? "activeBar" : "bar"}`}>
         {imgIndex === 2 && <div  className="progress-fill"></div>}
         </div>
         <div className={`${imgIndex === 3 ? "activeBar" : "bar"}`}>
         {imgIndex === 3 && <div  className="progress-fill"></div>}
         </div>
         <div className={`${imgIndex === 4 ? "activeBar" : "bar"}`}>
         {imgIndex === 4 && <div  className="progress-fill"></div>}
         </div>
         <div className={`${imgIndex === 5 ? "activeBar" : "bar"}`}>
         {imgIndex === 5 && <div  className="progress-fill"></div>}
         </div>
      </div>
    </div>
  );
};

export default Slider;
