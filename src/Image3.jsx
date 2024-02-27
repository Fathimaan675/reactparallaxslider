import { Parallax } from 'react-parallax';
import Food3 from '../src/assets/images/food3.jpg'
const Image3  = () => (
    <Parallax className='image' bgImage={Food3} strength={800}>
        <div className='content'>
            <span className='img-txt'> Food = Life</span>
        </div>
    </Parallax>
);
export default Image3