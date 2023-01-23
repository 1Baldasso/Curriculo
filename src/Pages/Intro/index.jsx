import '../pageStyle.css'
import './styles.css'
import MainContent from '../../Components/MainContent';
import SideBar from '../../Components/SideBar';
function Intro() {
    return ( 
        <div className="page">
            <SideBar/>
            <MainContent/>
        </div>
    );
}

export default Intro;