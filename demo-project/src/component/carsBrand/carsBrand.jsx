import './carsBrand.css'
import BMW from '../../assets/BMW.png';
import SUBARU from '../../assets/image 262.png';
import SUZUKI from '../../assets/layer1 (1).png';
import MERCEDIS from '../../assets/layer1.png';
import NISSAN from '../../assets/Nissan_Badge_1_.png';
import triangle from '../../assets/Vector (3).png';
import TOYOTA from '../../assets/Vector (4).png';
import Volve from '../../assets/Volvo_logo1 1.png';

function carsBrand(){
    return(
        <div className='general-brand-container'>
           <div className='first-row-brand'>
              <img className='logo-img' src={NISSAN} alt="" />
              <img className='logo-img' src={MERCEDIS} alt="" />
              <img className='logo-img' src={SUBARU} alt="" />
              <img className='logo-img' src={triangle} alt="" />
           </div>
           <div className='second-row-brand'>
             <img className='logo-img' src={BMW} alt="BMW-logo" />
             <img className='logo-img' src={Volve} alt="BMW-logo" />
             <img className='logo-img' src={SUZUKI} alt="BMW-logo" />
             <img className='logo-img' src={TOYOTA} alt="BMW-logo" />
           </div>
        </div>
    );
};


export default carsBrand;