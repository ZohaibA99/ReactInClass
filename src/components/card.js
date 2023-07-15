import School from "./img/School@2x_1.png";
import TrashCan from "./img/Vector_(5).svg";
import Edit from "./img/Group_(8).svg";

const Card = ({name, label}) => {
    return (
        <div>
            <img src={School} alt={name}></img>
            <p>{label}</p>
            <h3>{name}</h3>
            <a href="google.com"><img src={Edit} alt="edit"></img></a>
            <a href="google.com"><img src={TrashCan} alt="delete"></img></a>
        </div>
    )
}

const CardComponent = () =>{
    return (
        <Card name="MIT" label="university"></Card>
    )
}

export default CardComponent;