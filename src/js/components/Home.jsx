import React from 'react';

const Home = () => {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		gameBoard: [
	// 			' ', ' ', ' ',
	// 			' ', ' ', ' ',
	// 			' ', ' ', ' '
	// 		]
	// 	}
	// }
	return (
		<div className="container">
		<div className="menu text-center">
			<h1 className="text-center mt-5">Tic Tac Toe</h1>
			<h6 className="text-center m-2">Pick one</h6>
				<div className="board">
				</div> 
				{/* {this.state.gameBoard.map} */}
		</div>
		</div>
	);
};

export default Home;