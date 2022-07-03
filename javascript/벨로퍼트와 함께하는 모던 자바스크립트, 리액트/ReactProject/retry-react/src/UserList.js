import React from 'react';

function User({user}){
    return(
        <div><b>{user.username}</b> <span>({user.email})</span></div>
    );
}

function UserList(){
    const users = [ 
        {
            id: 1,
            username: 'jjangu',
            email: 'jjangu@sunflower.com'
        },
        {
            id: 2,
            username: 'yuri',
            email: 'yuri@sunflower.com'
        },
        {
            id: 3,
            username: 'chita',
            email: 'chita@sunflower.com'
        },
    ];  

    return(
        <div>
            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    );
}

export default UserList;