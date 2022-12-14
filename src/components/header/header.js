import Top from './navigation/navbar';
import Bottom from './header-banner/hbanner';
import {Hat} from '../../rules';
function Header(){
    return(
        <Hat>
        <Top/>
        <Bottom/>
        </Hat>
    );
}
export default Header;