import React from "react";

export function Jumbotron() {
	return (
		<div
			className="jumbotron  "
			style={{
				margin: "50px",
				height: "450px",
				marginTop: "0px",
				width: "70%"
			}}>
			<h1 className="display-4 float-left">Bienvenido a mi pagina </h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<hr className="my-4" />
			<p className="float-right">
				It uses utility classNamees for typography and spacing to space
				content out within the larger container.
			</p>
			<a
				className="btn btn-primary btn-lg float-left"
				href="https://es.reactjs.org/"
				role="button">
				Call to action!
			</a>
		</div>
	);
}
