import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./component/indexCompo";
import { Home } from "./pages/indexPage";

function App() {
  return (
    <>
     <Routes>
       <Route path='./' element={<Navbar></Navbar>}></Route>
       <Route path='./' element={<Navbar></Navbar>}></Route>
     </Routes>
    </>
  );
}

export default App;
