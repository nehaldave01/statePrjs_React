import Login from "./Login";
import Login2 from "./Login2";
import Sliders from "./Sliders";
import Login3 from "./Login3";
import State from "./State";
import NewSlider from "./NewSlider";
import State1 from "./json/State1";
import Datstate from "./json/Datstate";
import Proj1 from "./Proj1";
import Eyepass from "./eyePassword/Eyepass";
import Prj1 from "./useStateHook/Prj1";
import Prj2 from "./useStateHook/Prj2";
import Prj3 from "./useStateHook/Prj3";
import Prj4 from "./useStateHook/Prj4";
import Effectprj1 from "./useEffect/Effectprj1";
import Effectprj2 from "./useEffect/Effectprj2";
import Effectprj3 from "./useEffect/Effectprj3";
import Storage1 from "./storage/Storage1";
import Storage2 from "./storage/Storage2";
import Storage3 from "./storage/Storage3";
import Effect1 from "./effect/Effect1";
import Ref1 from "./useRef/Ref1";
import StateRef from "./useRef/StateRef";
import FormStor from "./storage/FormStor";
import { Route, Routes } from "react-router-dom";
import Parent_form from "./multipage_form/Parent_form";
import Page1 from "./Product_page/Page1";
import Todo from "./Todolist/Todo";
import Search from "./Search1";
import Search1 from "./Search1";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FormStor />} />
        <Route path="/StateRef" element={<StateRef />} />
      </Routes>
      {/* <Parent_form/> */}
      {/* <Sliders/> */}
      {/* <Login/> */}
      {/* <Login2/> */}
      {/* <Login3/> */}
      {/* <State/> */}
      {/* <NewSlider/> */}
      {/* <Datstate/> */}
      {/* <Proj1/> */}
      {/* <Eyepass/> */}
      {/* <Prj1/>  */}
      {/* <Prj2/> */}
      {/* <Prj3/> */}
      {/* <Prj4/> */}
      {/* <Effectprj1/> */}
      {/* <Effectprj2/> */}
      {/* <Effectprj3/> */}
      {/* <Storage1/> */}
      {/* <Storage2/> */}
      {/* <Storage3/> */}
      {/* <Effect1/> */}
      {/* <Ref1/> */}
    {/* <Page1/>  */}
    {/* <Todo/> */}

    {/* <Search1/> */}


    </div>
  );
}

export default App;
