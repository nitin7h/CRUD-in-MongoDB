import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import Update from "./components/Update";
import Delete from "./components/Delete";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/addUser" element={<AddUser></AddUser>}></Route>
          <Route path="/update/:id" element={<Update></Update>}></Route>
          {/* <Route path="/delete/:id" element={<Delete></Delete>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
