import { useState, useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const FormStor = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });
  const [arr, setArr] = useState([]);
  const [editIndex, setEditIndex] = useState();
  const [update, setUpdate] = useState("Submit");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const click1 = () => {


    let copy = [...arr];
    if (update === "Update") {
      copy[editIndex] = data;
      // setArr(copy)
      setUpdate("Submit");
    } else {
      if (data.name.length > 0) {
        copy = [...arr, data];
        navigate("/StateRef");
      }
    }

    localStorage.setItem("copy", JSON.stringify(copy));
    console.log(copy);
    setArr(copy);
    setData({ name: "", email: "", number: "", password: "" });
  };

  const deleterow = (index) => {
    let copy = [...arr];
    copy.splice(index, 1);
    localStorage.setItem("copy", JSON.stringify(copy));
    setArr(copy);
  };

  const editrow = (e, i) => {
    setEditIndex(i);
    setData(e);
    setUpdate("Update");
  };

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem("copy")) || [];
    setArr(a);
  }, []);

  return (
    <div>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="name"
        value={data.name}
        placeholder="enter name"
        onChange={handleChange}
      />

      <label htmlFor="">Email</label>
      <input
        type="text"
        name="email"
        value={data.email}
        placeholder="enter email"
        onChange={handleChange}
      />

      <label htmlFor="">Phone</label>
      <input
        type="text"
        name="number"
        value={data.number}
        placeholder="enter phone number"
        onChange={handleChange}
      />

      <label htmlFor="">Password</label>
      <input
        type="text"
        name="password"
        value={data.password}
        placeholder="enter password"
        onChange={handleChange}
      />
      <button
        className={`btn btn-${update === "Submit" ? "warning" : "danger"} my-3`}
        onClick={click1}>
        {update}
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {arr.map((e, i) => {
            return (
              <tr>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.number}</td>
                <td>{e.password}</td>
                <td>
                  <MdDelete onClick={() => deleterow(i)}/>
                  <MdEdit onClick={() => editrow(e,i)}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FormStor;
