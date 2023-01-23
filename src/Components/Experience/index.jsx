import './styles.css'
function Experience(props) {
    const disciplines = props.object.disciplines;
    if(disciplines === undefined)
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
                <p>{disciplines[0]}</p>
                <p>{disciplines[1]}</p>
                <p>{disciplines[2]}</p>
            </ul>
        </div>
    )
}

export default Experience;