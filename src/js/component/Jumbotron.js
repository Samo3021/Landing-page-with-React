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
			<h1 className="display-4 float-left">Bienvenido a mi pagina</h1>
			<p className="lead">
				React es una biblioteca Javascript para crear interfaces de
				usuario.
			</p>
			<hr className="my-4" />
			<p className="float-right">
				React es mantenido por Facebook y la comunidad de software
				libre. En el proyecto hay más de mil desarrolladores libres.
			</p>
			<a
				className="btn btn-primary btn-lg float-left"
				href="https://es.reactjs.org/"
				role="button">
				Aprende Más aqui!!!
			</a>
		</div>
	);
}
