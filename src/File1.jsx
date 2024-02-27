import { Parallax } from 'react-parallax';
import Food from '../src/assets/images/food.jpg'
const File1  = () => (
    <Parallax className='image' bgImage={Food} strength={800}>
        <div className='content'>
            <span className='img-txt'> But first, food</span>
        </div>
    </Parallax>
);
export default File1