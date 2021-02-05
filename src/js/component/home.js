import React from "react";
import { Navbar } from "./Navbar.js";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./card";
import { Alert } from "./alert";
//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center container-fuild ">
			<Navbar />
			<div className="d-flex justify-content-center">
				<Jumbotron />
			</div>

			<div className="row d-flex justify-content-center  ">
				<Card title="hola" description="hola" />
				<Card />
				<Card />
				<Card />
			</div>
			<Alert />
		</div>
	);
}
