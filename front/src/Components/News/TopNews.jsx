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
                            <th>نام</th>
                            <th>نام خانوادگی</th>
                            <th>ایمیل</th>
                            <th>رمز عبور</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(
                                user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
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