import collections from "./collections.json";
import Button from "./button";
import PropTypes from "prop-types";
import {css} from '@emotion/react';

const styles = css`
    color: red;
    font-size: 90px;
`;

const Tutor = ({FirstName, LastName, Phone, Email, City, Options}) => {
    return (
        <li>
            <p>{FirstName}</p>
            <p>{LastName}</p>
            <p>{Phone}</p>
            <p>{Email}</p>
            <p>{City}</p>
            <p>{Options}</p>
        </li>
    )
};

Tutor.propTypes = {
    FirstName: PropTypes.string.isRequired,
    LastName: PropTypes.string.isRequired,
    Phone: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    City: PropTypes.string.isRequired,
    Options: PropTypes.string.isRequired,
}

const TutorList = () => {
    return (
        <div>
            <h3>Tutros</h3>
            <ul>
                {collections.tutors.map(tutor =>(
                    <div css={styles}>
                    <Tutor 
                        key={tutor.id}
                        FirstName={tutor.firstName}
                        LastName={tutor.lastName}
                        Phone={tutor.phone}
                        Email={tutor.email}
                        City={tutor.city}
                        Options={tutor.options}
                        ></Tutor>
                    </div>
                ))}
            </ul>
            <Button name="Add Tutor"></Button>
        </div>
    )
}

export default TutorList;