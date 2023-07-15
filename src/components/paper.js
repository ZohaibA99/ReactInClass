const paperStyles = {
    backgroundColor: "white",
    width: "50%",
}

const Paper = props => {
    return (
        <div style={paperStyles}>
            {props.children}
        </div>
    )
}

export default Paper;