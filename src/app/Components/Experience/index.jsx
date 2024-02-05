import './styles.css'
function Experience(props) {
    return ( 
        <div className={"experience ".concat(props.invert === "true" ? "invert-order":"normal-order")}>
            <h3>{props.object.name}</h3>
            <p className="position">{props.object.position}</p>
            <p className="period">{props.object.period}</p>
            {/* <p className="description">{props.object.description}</p> */}
            <ul className="description">
                {props.object.listWay.map((item, index) => {
                    return <li key={index+item[0]+item[3]}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default Experience;