import './testimonials.scss';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Testimonials = () => {

    const data = [
        {
            id: '1',
            name: 'Alexa Colb',
            title: 'Web Dedsign',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quaerat magni laudantium',
            img: 'https://images.pexels.com/photos/3309510/pexels-photo-3309510.jpeg?auto=compress&cs=tinysrgb&w=600',
            featured: false
        },
        {
            id: '2',
            name: 'Kristina Korgi',
            title: 'Web Dedsign',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quaerat magni laudantium',
            img: 'https://images.pexels.com/photos/3678466/pexels-photo-3678466.jpeg?auto=compress&cs=tinysrgb&w=600',
            featured: true
        },
        {
            id: '3',
            name: 'Vlada Hotte',
            title: 'Web Dedsign',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quaerat magni laudantium',
            img: 'https://images.pexels.com/photos/9972804/pexels-photo-9972804.jpeg?auto=compress&cs=tinysrgb&w=600',
            featured: false
        }
    ];

    return (
        <div className="testimonials" id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(item => (
                    <div className={item.featured ? "card featured" : "card"} key={item.id}>
                        <div className="top">
                            <ArrowCircleRightIcon className="left" />
                            <img className='user' src={item.img} alt="" />
                            <YouTubeIcon className="right" />
                        </div>
                        <div className="center">
                            {item.desc}
                        </div>
                        <div className="bottom">
                            <h3>{item.name}</h3>
                            <h4>{item.title}</h4>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Testimonials;