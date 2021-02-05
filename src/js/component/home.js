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
		<div className="container-fuild  text-center">
			<Navbar />
			<Jumbotron />

			<div className="row  ">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Alert />
		</div>
	);
}
