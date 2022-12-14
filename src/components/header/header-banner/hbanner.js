import {Hbanner, BannerTXT} from '../../../rules';
import Img1 from './l_banner.svg';
import Img2 from './r_banner.svg';
function HeaderBanner(){
    return(
        <Hbanner>
            <img src={Img1} alt="banner-l"/>
            <BannerTXT>
                Rick and Morty! Portal!
            </BannerTXT>
            <img src={Img2} alt="banner-r"/>
        </Hbanner>
    );
}
export default HeaderBanner;