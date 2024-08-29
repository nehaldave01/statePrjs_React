import { useState } from "react";

const Search = (props) => {
  const [data1, setdata1] = useState(props.data);
  const [first, setfirst] = useState("");
  const [showRange, setshowRange] = useState();

  const click1 = () => {
    let getData = data1.filter((e) => {
      return e.title.toLowerCase().includes(first.toLowerCase());
    });
    setdata1(getData);
  };

  const handlechange = (e) => {
    setfirst(e.target.value);
    
  };

  const handlerange = (e) => {
    let val = e.target.value;
    setshowRange(val);
    console.log(val)
      let getPrice= data1.filter((z) => {
         return z.price<=(val);
       });
       setdata1(getPrice)
  }

  return (
    <>
      <div className="container mx-auto ">
        <div className=" row">
          <div className="col-3">
            <label htmlFor="">Search</label>
            <input
              type="text"
              placeholder="Search here..."
              name="title"
              onChange={handlechange}
            />
          </div>

          <div className="col-5">
            <button className="btn btn-primary" onClick={click1}>
              Submit
            </button>
          </div>
          <div className="col-4">
            <label htmlFor="">Price Range</label>
            <input
              type="range"
              name="range"
              onChange={handlerange}
              min={390}
              max={3000}
              defaultValue={1000}
              value={showRange}
            />
          </div>
          {showRange}
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {data1.map((e) => {
          return (
            <>
              <div style={{ width: "300px" }} className="p-3">
                <h3>{e.title.slice(0, 15)}</h3>
                <p>Price: {e.price}</p>
                <p>{e.category}</p>
                <img
                  src={e.image}
                  alt=""
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Search;




// import { useState, useEffect } from "react";

// const Search = (props) => {
//   const [data1, setData1] = useState(props.data);
//   const [first, setFirst] = useState("");
//   const [showRange, setShowRange] = useState(1000);

//   const filterData = () => {
//     const filteredData = props.data.filter((item) => {
//       const matchesTitle = item.title.toLowerCase().includes(first.toLowerCase());
//       const matchesPrice = item.price <= showRange;
//       return matchesTitle && matchesPrice;
//     });
//     setData1(filteredData);
//   };

//   const handleChange = (e) => {
//     setFirst(e.target.value);
//   };

//   const handleRange = (e) => {
//     const val = Number(e.target.value);
//     setShowRange(val);
//   };

//   useEffect(() => {
//     filterData();
//   }, [first, showRange]);

//   return (
//     <>
//       <div className="container mx-auto">
//         <div className="row">
//           <div className="col-3">
//             <label htmlFor="search">Search</label>
//             <input
//               type="text"
//               id="search"
//               placeholder="Search here..."
//               name="title"
//               onChange={handleChange}
//               value={first}
//             />
//           </div>

//           <div className="col-4">
//             <label htmlFor="range">Price Range</label>
//             <input
//               type="range"
//               id="range"
//               name="range"
//               onChange={handleRange}
//               min={390}
//               max={3000}
//               value={showRange}
//             />
//             <span>{showRange}</span>
//           </div>
//         </div>
//       </div>

//       <div className="d-flex flex-wrap">
//         {data1.map((e) => (
//           <div key={e.id} style={{ width: "300px" }} className="p-3">
//             <h3>{e.title.slice(0, 15)}</h3>
//             <p>Price: {e.price}</p>
//             <p>{e.category}</p>
//             <img
//               src={e.image}
//               alt={e.title}
//               style={{ width: "150px", height: "150px" }}
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Search;
