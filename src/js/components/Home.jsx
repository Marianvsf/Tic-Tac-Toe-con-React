import React from "react";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Tic Tac Toe</h1>
			<h6 className="text-center m-2">Pick one</h6>
				<div className="board">
					<a href="#" className="btn btn-success">
						If you see this yellow button... bootstrap is working...
					</a>
				</div> 
		</div>
	);
};

export default Home;