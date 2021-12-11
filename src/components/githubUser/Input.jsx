import React, { useState } from 'react';

const Input = (props) => {
    const [user, setUser]=useState("");
    const handleClick=()=>{
        props.handleSearch(user);
    }
    return (
        <div>
            <input value={user} onChange={(e)=>{setUser(e.target.value)}} type="text"/>
            <button onClick={handleClick}>Search</button>
        </div>
    );
}


export default Input;
