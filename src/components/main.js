import Paper from "./paper";
import CardComponent from "./card";
import TutorList from './tutor';
import CitiesList from './city';
import DepartmentList from './department';

const Discription = () => {
    return(
      <p>
        Experience, a concentration of knowledge and the ability to 
        avoid most recruiting mistakes. We know what most local and 
        foreign companies want and we can give it to you. And we are 
        constantly improving our programming courses, adding something 
        new there. You can see the success stories of our alumni for yourself 
        to see the effectiveness of our teaching methodology. Yes, we will '
        start with the basics and the most basic information. We know that 
        most people come to us with zero knowledge.
      </p>
    )
  }

const Main = () =>{
    return (
    <div style={{backgroundColor: "rgba(245, 245, 245, 1)"}}>
      <Paper><CardComponent></CardComponent></Paper>
      <Paper><Discription></Discription></Paper>
      <Paper><TutorList></TutorList></Paper>
      <Paper><CitiesList></CitiesList></Paper>
      <Paper><DepartmentList></DepartmentList></Paper>
      </div>
    )
}

export default Main;