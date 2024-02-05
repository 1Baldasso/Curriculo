import './styles.css'


function Skills(props) {
  const info = props.info
  const data = {
    labels: info.person.skills.map(x=>x.name),
    datasets: [{
        data: info.person.skills.map(x=>x.proficiency),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
    }]
  };
  return (  
    <div>
      <h2 id='skills-title'>Skills</h2>
      {/*<p id="english"><strong>English Level: </strong>Advanced</p> */}
      <div id='skills'>
        <div className='column'>
          <div id='skill-logos'> 
            <div className='logos'>
                {/* <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="" /> */}
                {/* <img className='logo' src="https://cdn.cdnlogo.com/logos/u/20/unity.svg" alt="" />
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Visual_Studio_Icon_2022.svg" alt="" />
                <img className='logo' src="https://cdn.cdnlogo.com/logos/c/27/c.svg" alt="" />
                <img className='logo' src="https://cdn.cdnlogo.com/logos/r/63/react.svg" alt="" />
                <img className='logo' src="https://cdn.cdnlogo.com/logos/j/2/java.svg" alt="" />
                <img className='logo' src="https://cdn.cdnlogo.com/logos/j/33/javascript.svg" alt="" />
                <img className='logo' src="https://zeevector.com/wp-content/uploads/Azure-Devops-Logo-Transparent.png" alt="" />
                <img className='logo' src="https://cdn.cdnlogo.com/logos/d/6/dot-net-core.svg" alt="" /> */}
                
                  {info.person.skills.map(x=><p key={x.name+x.name[0]}>{x.name}</p>)}
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;