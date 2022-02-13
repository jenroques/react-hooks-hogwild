import React from "react";
import Nav from "./Nav";
import Tiles from "./Tiles";


import hogs from "../porkers_data";


function App() {
	return (
		<div className="App">
			<Nav />
			<Tiles hogData={hogs} />
		</div>
	);
}

export default App;



/*   
				App 
					hogData(porkersData.js - hogs)
	   		Tiles 
			   	name (hogData.map) - hog.name
				image (hogData.map) - hog.image
		Tile 
			name
			image 

	*/
