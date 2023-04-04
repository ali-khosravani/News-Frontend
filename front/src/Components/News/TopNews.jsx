import axios from "axios";
import { useState ,useEffect} from "react";
import './TopNews.css';

function TopNewsService() {
    const [topnews , setTopnews] = useState([])
    useEffect(()=>{
        getTopnews()
    } , [])

    const getTopnews =async ()=>{
        await axios.get('http://localhost:8085/TopNews/1').then((res)=>{
            setTopnews(res.data)
        });
    };
    return ( 
        <>
            <img src={`../images/topnews/${topnews.imgUrl}`} alt={`${topnews}`} height={300} width="100%"/>  
            <div className="over-image-div">
                <h4 className="over-image">{topnews.title}</h4>   
            </div>           
                   
        </>          
     );
}
export default TopNewsService;