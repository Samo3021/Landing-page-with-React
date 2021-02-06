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
				<Card
					title="Tengen Toppa Gurren Lagann"
					description=" Escucha bien y no lo olvides, Cree en ti mismo, No en mi creyendo en ti Ni en ti creyendo en mí, Cree en ti, y solo en ti "
					imagen="https://www.lacasadeel.net/wp-content/uploads/2012/10/Kamina-Simon-wallpaper.jpg"
					buttonLabel="Aprende Más"
					buttonUrl="https://reactjs.org/"
				/>
				<Card
					title="Batman"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
					imagen="https://i.blogs.es/edeb0a/1366_2000-5-/840_560.jpeg"
					buttonLabel="Aprende Más"
					buttonUrl="https://reactjs.org/"
				/>
				<Card
					title="One punch man"
					description="ok...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
					imagen="https://images8.alphacoders.com/669/thumb-350-669047.png"
					buttonLabel="Aprende Más"
					buttonUrl="https://reactjs.org/"
				/>
				<Card
					title="Linda vista"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
					imagen="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg"
					buttonLabel="Aprende Más"
					buttonUrl="https://reactjs.org/"
				/>
			</div>
			<Alert />
		</div>
	);
}
