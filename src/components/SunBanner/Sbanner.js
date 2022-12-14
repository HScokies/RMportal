import { SunBanner, SunContainer} from '../../rules';
import SunImg from './Screaming_sun.svg';
import SunEye from './eye.svg'
import './eyepos.css';
import './Eyescript';


function Sbanner(){
    return(
        <SunContainer>
        <SunBanner id="sbanner">
            <img src={SunImg} alt='ScreamingSun'/>
        </SunBanner>
        <div id='LeftSocket'>
        <img src={SunEye} alt='Eye_L'/>
        </div>
        <div id='RightSocket'>
            <img src={SunEye} alt='Eye_R'/>
        </div>
        </SunContainer>
    );
}
export default Sbanner;