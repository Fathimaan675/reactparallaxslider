import { Parallax } from 'react-parallax';
import Food2 from '../src/assets/images/food2.jpg'
const Image2  = () => (
    <Parallax className='image' bgImage={Food2} strength={800}>
        <div className='content'>
            <span className='img-txt'> Sugar, spice, and everything nice</span>
        </div>
    </Parallax>
);
export default Image2