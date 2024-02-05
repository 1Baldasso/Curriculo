import "./styles.css";
import ProfilePic from "../../../Assets/ProfilePic.jpg";
import Skills from "../Skills";
import Image from "next/image";
function SideBar(props) {
  const info = props.info;
  return (
    <div className="sidebar column">
      <div className="row">
        <Image
          src={require("../../../Assets/ProfilePic.jpg")}
          className="profile-pic"
          alt=""
        />
        <div>
          <h3>Contact</h3>
          <strong>Phone: </strong>
          <a
            href="https://wa.me/5542998029837"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p>+55 42 99802-9837</p>
          </a>
          <strong>E-mail:</strong>
          <p>biolucasb@gmail.com</p>
        </div>
        <Skills info={info} />
      </div>
      <h2 style={{ marginTop: "40px" }}>Profile</h2>
      {/*i want the description to use \n as <br/>*/}
      <p className="normal-text">{info.person.description}</p>
      <h3>Portfolio</h3>
      <a href={"https://1baldasso.dev.br/"}>https://1baldasso.dev.br/</a>
      <a href={"https://github.com/1baldasso/"}>
        https://github.com/1baldasso/
      </a>
      {/* <h3>Hobbies</h3>
        {info.person.hobbies.map(x=><p>{x}</p>)} */}
      {info.person.experiences.some((e) => e.reference) && (
        <>
          <h3>References</h3>
          {info.person.experiences
            .filter((e) => e.reference)
            .map((e) => (
              <a key={e.name} href={e.reference}>
                {e.name}
              </a>
            ))}
        </>
      )}
    </div>
  );
}

export default SideBar;
