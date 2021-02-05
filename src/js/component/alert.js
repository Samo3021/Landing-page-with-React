import React from "react";

export function Alert() {
	return (
		<div>
			<div className="alert alert-dark" role="alert">
				A simple dark alert with{" "}
				<a href="#" className="alert-link">
					an example link
				</a>
				. Give it a click if you like.
			</div>
		</div>
	);
}
