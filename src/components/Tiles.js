import Tile from "./Tile";

//props.hogData = returns an array full of hog objs 
// Want to map thru hogData and render tile for each hog

 

const Tiles = (props) => {

   const filterHogs = () => {
       return (
        <div>
            <div>
             Only greased: <input type="checkbox" id="filter"></input>
            </div>
            <div>
            Sort by name: <input type="checkbox" id="sort"></input>
            </div>

        </div>
       )
   } 

   const renderHogTiles = () => {
  
    return props.hogData.map(hog => {
            return (
                <Tile 
                    key={hog.image} 
                    name={hog.name} 
                    image={hog.image} 
                    specialty={hog.specialty}
                    weight={hog.weight}
                    greased={hog.greased}
                    medal={hog["highest medal achieved"]}
                />)
        })
    } 

    return (
        <div className="tileContainer">
            {renderHogTiles()}
        </div> 
    )
}

export default Tiles 