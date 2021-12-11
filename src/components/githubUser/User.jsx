import React, { useState } from 'react';
import Input from './Input';
import axios from 'axios'
import Show from './Show';
// import { uuid } from 'uuidv4';
const User = () => {
    const [userArr,setUserArr]=useState([]);
    // useEffect(() => {
        
    // }, [userArr,val]);
    const handleSearch=(user)=>{
        if (user) {
            axios.get(`https://api.github.com/search/users?q=${user}&per_page=20`)
            .then(response=>{
                setUserArr(response.data.items);
                console.log(userArr)
            })
        }
        console.log(user);
    }
    return (
        <div>
            <Input handleSearch={handleSearch}/>
            <div>
                {
                    userArr.length?(userArr.map(item=>(
                        <Show key={item.id} avatar={item.avatar_url} link={item.html_url} userName={item.login}/>
                    ))):null
                }
            </div>
        </div>
    )
        
}
export default User;
