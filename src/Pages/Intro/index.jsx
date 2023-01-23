import '../pageStyle.css'
import './styles.css'
import MainContent from '../../Components/MainContent';
import SideBar from '../../Components/SideBar';
import Skills from '../../Components/Skills';
function Intro() {
    return ( 
        <div className="page">
            <SideBar/>
            <MainContent/>
        </div>
    );
}

export default Intro;