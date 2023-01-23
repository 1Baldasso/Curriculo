import './styles.css'
function Experience(props) {
    const name = props.object.name === "SENAI - Guarapuava";
    if(!name)
    return ( 
        <div className={"experience ".concat(props.invert === "true" ? "invert-order":"normal-order")}>
            <h3>{props.object.name}</h3>
            <p className="position">{props.object.position}</p>
            <p className="period">{props.object.period}</p>
            <p className="description">{props.object.description}</p>
        </div>
    )
    return ( 
        <div className={"experience ".concat(props.invert === "true" ? "invert-order":"normal-order")}>
            <h3>{props.object.name}</h3>
            <p className="position">{props.object.position}</p>
            <p className="period">{props.object.period}</p>
            <p className="description">{props.object.description}</p>
            <ul>
                <p>Introdution to Programming</p>
                <p>Application Programming</p>
                <p>Software Testing</p>
            </ul>
        </div>
    )
}

export default Experience;