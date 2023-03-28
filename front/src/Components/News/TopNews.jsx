import React , {useState , useEffect} from "react";
import UserService from './UserService';
import './TopNews.css';

function TopNews(){
    const [users ,setUsers] = useState([])

    useEffect(()=> {
        getUsers()
    } ,[])

    const getUsers = ()=>{
        UserService.getUsers().then((response)=>{
            setUsers(response.data)
            console.log(response.data)
        });
    };
    return(
        <section className="top-news">
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>کد</th>
                            <th>عنوان</th>
                            <th>آدرس عکس</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(
                                user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>                                    
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </section>
    )
}
export default TopNews