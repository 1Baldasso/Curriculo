import './styles.css'
import Skills from '../Skills';
function SideBar(props) {
    const info = props.info;
    return ( 
    <div className='sidebar column'>
        <div className='row'>
            <img src={info.person.image} className='profile-pic' alt=""></img>
            <Skills info={info}/>
        </div>
        <h2>Profile</h2>
        <p className='normal-text'>{info.person.description}</p>
        <h3>Portfolio</h3>
        <a href={"https://1baldasso-portfolio.vercel.app/"}>https://1baldasso-portfolio.vercel.app/</a>
        <h3>Contact</h3>
        <strong>Phone: </strong>
        <p>+55 42 99802-9837</p>
        <strong>E-mail:</strong>
        <p>engs-lucasbaldasso@camporeal.edu.br</p>
        {/* <h3>Hobbies</h3>
        {info.person.hobbies.map(x=><p>{x}</p>)} */}
    </div> 
);
}

export default SideBar;