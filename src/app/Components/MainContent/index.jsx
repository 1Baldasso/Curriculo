import Experience from "../../Components/Experience";
import SideBar from "../SideBar";
import Skills from "../Skills";
import Education from "../Education";
import "./styles.css";

function MainContent(props) {
  const info = props.info;
  return (
    <>
      <div className="maincontent column">
        <h1 id="header">Lucas Baldasso</h1>
        <h1 id="subheader">{info.person.position}</h1>
        {/* <div id='contact-info'>
                <p>{info.person.mobileNumber}</p>
                <p>{info.person.email}</p>
                <p>{info.person.location}</p>
            </div> */}
        <SideBar info={info} />
        {/* <Skills info={info}/> */}
        <h2>Experiences</h2>
        <Experience object={info.person.experiences[0]} invert={"true"} />
        <Experience object={info.person.experiences[1]} />
        <Experience object={info.person.experiences[2]} invert={"true"} />
        <Experience object={info.person.experiences[3]} />
        {/* <Experience object={info.person.experiences[3]}/> */}
        <h2>Education</h2>
        <Education object={info.person.education[0]} />
      </div>
    </>
  );
}

export default MainContent;
