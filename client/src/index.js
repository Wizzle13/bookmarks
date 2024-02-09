import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./dist/style.css";
import Header from "./components/header";
import App from "./App";
import Footer from "./components/footer";


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<App />
			<Footer />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);