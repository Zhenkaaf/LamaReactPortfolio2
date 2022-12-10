import './works.scss';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import { useState } from 'react';

const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: '1',
            icon: <PhoneAndroidIcon />,
            title: 'Web Dedsign',
            desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quaerat magni laudantium',
            img: 'https://i.pinimg.com/564x/28/3f/58/283f5890c83f7d08c74fc7e886b5d71d.jpg'
        },
        {
            id: '2',
            icon: <AlternateEmailIcon />,
            title: 'Web Dedsign',
            desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quaerat magni laudantium',
            img: 'https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: '3',
            icon: <DomainVerificationIcon />,
            title: 'Web Dedsign',
            desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quaerat magni laudantium',
            img: 'https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ];

    const handleClick = (way) => {
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    } 

    return (
        <div className="works" id='works'>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>

                {data.map(item => (
                    <div className="container" key={item.id}>
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    {item.icon}
                                    {/* <img src="" alt="" /> */}
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}

            </div>
            <ArrowBackIosIcon className="arrow left" onClick={() => handleClick('left')} />
            <ArrowForwardIosIcon className="arrow right" onClick={() => handleClick()} />
        </div>
    )
}
export default Works;