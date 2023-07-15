import collections from "./collections.json";
import Button from "./button";

const Department = ({name}) => {
    return (
        <li>
            <p>{name}</p>
        </li>
    )
}

const DepartmentList = () => {
    return(
        <div>
            <h3>Faculty</h3>
            <ul>
                {collections.department.map(department => (
                    <Department key={department.id} name={department.name}></Department>
                ))}
            </ul>
            <Button name="Add Faculty"></Button>
        </div>
    )
}

export default DepartmentList;