import {info as infoEN} from '../../../Assets/PersonInfo'
import {info as infoBR} from '../../../Assets/PersonInfoPTBR'
import '../pageStyle.css'
import './styles.css'
import MainContent from '../MainContent';
import SideBar from '../SideBar';
function Intro(props) {
    const info = props.language==="PT-BR" ? infoBR : infoEN;
    return ( 
        <div className="page">
            {/* <SideBar info={info}/> */}
            <MainContent info={info}/>
        </div>
    );
}

export default Intro;