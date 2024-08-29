import React, { useState } from 'react'
import "./Images/img1.jpg"

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

      let arr = ['Image/img1.jpg', 'Image/img2.jpg', 'Image/img3.jpg', 'Image/img4.jpg'];
      let index = 0;

      document.getElementsByTagName("img").src = arr[index]
   
   const click1 = () => {
    // setcrousal = (index === 0)? arr.length-1 : index-1;
    // document.getElementsByTagName('img').src = arr[index];
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Image.length - 1 : prevIndex - 1));
   }

   const click2 = () => {
    // setcrousal = (index === arr.length-1) ? 0 : index+1;
    //    document.getElementsByTagName('img').src = arr[index];
    setCurrentIndex((prevIndex) => (prevIndex === Image.length - 1 ? 0 : prevIndex + 1));
   }

    
  return (
    <div>
        <img src={Image[currentIndex]}alt="" style={{width:"1500px", height:"600px"}}/>
        <button onClick={click1}>Previous</button>
        <button onClick={click2}>Next</button>

    </div>
  )
}

export default Slider