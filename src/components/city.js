import collections from "./collections.json";
import Button from "./button";

const City = ({city}) => {
    return (
        <li><p>{city}</p></li>
    )
}

const CitiesList = () => {
    return (
        <>
            <h3>Cities</h3>
            <ul>
                {collections.cities.map(city => (
                    <City city={city}></City>
                ))}
            </ul>
            <Button name="Add City"></Button>
        </>
        
    )
}

export default CitiesList;