import React, { useState } from "react";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpg";

const NewSlider = () => {
    const [index, setindex] = useState(0)
  let arr = [img1, img2, img3, img4];

  const next=()=>{
    if(index<arr.length-1){
        setindex(index+1)
    }else{
        setindex(0)
    }
  }

  const prev=()=>{
    if(index>0){
        setindex(index-1)
  }else{
    setindex(arr.length-1)
  }
}

const click1=(i)=>{
setindex(i)
}

  return (
    <>
    <div className="container w-25 text-center my-4">
      {arr.map((e, i) => (
          <>
        {i ===index && <img src={e} alt="" width={"300px"} height={"300px"} className="rounded"/>}</>
      ))}
      </div>

<div className="container text-center">
      <button className="btn btn-success" style={{position:"relative",top:"-200px",left:"-200px"}} onClick={prev}>&lt;</button>
      <button className="btn btn-success" style={{position:"relative",top:"-200px",left:"200px"}} onClick={next}>&gt;</button>
</div>

<div className="d-flex justify-content-center gap-3">
      {arr.map((e, i) => (
          <>
      <img src={e} alt="" width={"50px"} height={"50px"} className="rounded" style={{cursor:"pointer",border:`${i===index ? "2px solid red" :""}`}} onClick={()=>click1(i)}/></>
      ))}
      </div>


      <div className="d-flex justify-content-center gap-3">
      {arr.map((e, i) => (
          <>
          <span style={{fontSize:"100px",position:"relative",top:"-50px",cursor:"pointer",color:`${i===index? "red":""}`}} onClick={()=>click1(i)}>.</span>
          </>
      ))}
      </div>
    </>
  );
};

export default NewSlider;
