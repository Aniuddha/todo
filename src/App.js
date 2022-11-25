
import React, { useState } from "react";
import './App.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
import Addtodo from "./Components/Addtodo";

const App=()=>{	
	
	return (
		<>
		<Header/>
		<Body/>
        <Addtodo/>
		</>
	)
}

export default App;


