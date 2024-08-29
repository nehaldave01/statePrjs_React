import { useState } from "react";

const State1 = (props) => {
  const [first, setfirst] = useState(props.data);
  const [state, setState] = useState("");
  const [cities, setcities] = useState([]);

  console.log(state)

  const handlechange = (e) => {
    let a = e.target.value;
    setState(a);

   let abc = first.filter((e)=>{
         return (e.state === a)
    })
    console.log(abc[0].city)

    setcities(abc[0].city)

  };


  return (
    <div>
      <label htmlFor="" className="fs-1">
        Select State:
      </label>
      <select className="form-select" name="select" onChange={handlechange}>
        <option selected>Please Select the one State....</option>
        {/* map loop on data */}
        {first.map((e) => {
          return <option>{e.state}</option>;
        })}
      </select>
      <br />

      <label htmlFor="" className="fs-3">
        Select the City
      </label>
      <select className="form-select form-select-sm">
        <option selected>Select the city of </option>
        {cities.map((e) => {
          return <option value="">{e}</option>;
        })}
      </select>
    </div>
  );
};

export default State1;
