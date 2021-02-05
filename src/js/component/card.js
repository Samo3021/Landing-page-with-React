import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div>
			<div
				className="card"
				style={{ width: "18rem", margin: "20px", height: "auto" }}>
				<img src={props.imagen} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<a href={props.buttonUrl} className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
}
Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	imagen: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string
};
