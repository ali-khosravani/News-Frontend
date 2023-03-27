import './Header.css';
import logo from './../../assets/images/farsnews.svg';
import home from './../../../node_modules/bootstrap-icons/icons/house-fill.svg';
function Header() {
    return ( 
        <div className="MainHeader position-fixed" dir='ltr'>
          <div className='container position-relative d-flex justify-content-between h-100'>
            <div className='position-absolute h-100 pr-3'></div>
            
            <div className='w-100 d-lg-flex align-items-center'>
                <div className='main-menu ' dir='rtl'>
                <ul className='d-flex justify-content-center align-content-center list-unstyled p-0 m-0 h-100'>
                    <li><a href='/'><img src={home} /></a></li>
                    <li><a href='/'>جامعه</a></li>
                    <li><a href='/'>اقتصاد</a></li>
                    <li><a href='/'>بین الملل</a></li>
                    <li><a href='/'>سیاست</a></li>
                    <li><a href='/'>علم و پیشرفت</a></li>
                    <li><a href='/'>دانشگاه</a></li>
                    <li><a href='/'>فرهنگ</a></li>
                    <li><a href='/'>هنر و رسانه</a></li>
                    <li><a href='/'>استانها</a></li>
                    <li><a href='/'>عکس</a></li>
                    <li><a href='/'>فیلم</a></li>
                    <li><a href='/'>ورزش</a></li>
                    <li><a href='/'>فارس پلاس</a></li>
                    <li><a href='/'>زندگی</a></li>
                </ul>
                </div>    
            </div>  
            <div className='d-flex align-itemes-center' dir='rtl'>
                <div className='logo d-flex align-items-center'>
                    <a href='#'><img src={logo} height='30' width='auto'/></a>
                </div>
            </div>          
          </div>
        </div>
     );
}

export default Header
