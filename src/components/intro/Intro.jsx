import './intro.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';


const Intro = () => {

    const textRef = useRef();
    useEffect(() => {

        init(textRef.current, {
            showCursor: false,
            backDelay:  2000,
            showCursor: true,
            strings: ['Developer', 'Designer']
        })
    }, [])

    return (
        <div className="intro" id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Fodorov Yevhen</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDownIcon className='keyboardArrowDownIcon' />
                    {/*  <img src="" alt="" /> */}
                </a>
            </div>
        </div>
    )
}
export default Intro;