import info from '../../Assets/PersonInfo';
import './styles.css'
function SideBar() {
    return ( 
    <div className='sidebar column'>
        <img src={info.person.image} className='profile-pic' alt=""></img>
        <h2>Profile</h2>
        <p className='justified'>{info.person.description}</p>
        <h3>Portfolio</h3>
        <a href={"https://1baldasso-portfolio.vercel.app/"}>https://1baldasso-portfolio.vercel.app/</a>
        <h3>Contact</h3>
        <strong>Phone: </strong>
        <p>+55 42 99802-9837</p>
        <strong>E-mail:</strong>
        <p>engs-lucasbaldasso@camporeal.edu.br</p>
        <h3>Hobbies</h3>
        <p>Gaming</p>
    </div> 
);
}

export default SideBar;