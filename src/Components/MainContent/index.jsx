import Experience from '../../Components/Experience'
import Skills from '../Skills';
import './styles.css'

function MainContent(props) {
    const info = props.info;
    return ( 
    <>
        <div className='maincontent column'>
            <h1 id='header'>Lucas Baldasso</h1>
            <h1 id='subheader'>{info.person.position}</h1>
            {/* <Skills info={info}/> */}
            <h2>Experiences</h2>
            <Experience object={info.person.experiences[0]} invert={"true"}/>
            <Experience object={info.person.experiences[1]}/>
            <Experience object={info.person.experiences[2]} invert={"true"}/>
            <Experience object={info.person.experiences[3]}/>
        </div>
    </> );
}

export default MainContent;