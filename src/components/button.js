import PropTypes from "prop-types";
import css from "./Button.module.css";

console.log(css);

const Button = ({name}) => {
    return(
        <button className={css.button} type="submit">{name}</button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired
}

export default Button;