import info from '../../Assets/PersonInfo';
import './styles.css'
import { Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js'
import { Radar } from 'react-chartjs-2';

Chart.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
)
const data = {
  labels: info.person.skills.map(x=>x.name),
  datasets: [{
      data: info.person.skills.map(x=>x.proficiency),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
  }]
};
Chart.defaults.scale.max = 10
Chart.defaults.scale.beginAtZero = true;
function Skills() {
    return (  
      <>
        <h2 id='skills-title'>Skills</h2>
        <p id="english"><strong>English Level: </strong>Advanced</p>
        <div id='skills'>
          <div className='column'>
            <div id='skill-logos'> 
              <div className='column'>
                  <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="" />
                  <img className='logo' src="https://cdn.cdnlogo.com/logos/u/20/unity.svg" alt="" />
                  <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Visual_Studio_Icon_2022.svg" alt="" />
              </div>
                <div className='column'>
                  <img className='logo' src="https://cdn.cdnlogo.com/logos/c/27/c.svg" alt="" />
                  <img className='logo' src="https://cdn.cdnlogo.com/logos/r/63/react.svg" alt="" />
                </div>
            </div>
          </div>
            <div id='chart'>
                <Radar data={data} options={{maintainAspectRatio: true, aspectRatio:1.8}}/>
            </div>
        </div>
      </>
    );
}

export default Skills;