import './carsBrand.css';
import BMW from '../../assets/BMW.png';
import SUBARU from '../../assets/image 262.png';
import SUZUKI from '../../assets/layer1 (1).png';
import MERCEDIS from '../../assets/layer1.png';
import NISSAN from '../../assets/Nissan_Badge_1_.png';
import triangle from '../../assets/Vector (3).png';
import TOYOTA from '../../assets/Vector (4).png';
import Volve from '../../assets/Volvo_logo1 1.png';

function CarsBrand() {
  return (
    <div className="brand-grid">
      <img className="logo-img" src={NISSAN} alt="Nissan" />
      <img className="logo-img" src={MERCEDIS} alt="Mercedes" />
      <img className="logo-img" src={SUBARU} alt="Subaru" />
      <img className="logo-img" src={triangle} alt="Triangle" />
      <img className="logo-img" src={BMW} alt="BMW" />
      <img className="logo-img" src={Volve} alt="Volvo" />
      <img className="logo-img" src={SUZUKI} alt="Suzuki" />
      <img className="logo-img" src={TOYOTA} alt="Toyota" />
    </div>
  );
}

export default CarsBrand;
