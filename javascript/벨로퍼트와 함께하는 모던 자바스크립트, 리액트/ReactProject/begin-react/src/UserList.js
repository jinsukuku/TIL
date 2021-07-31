import React, {useState} from 'react';

function User({user}){
    return(
        <li>{user.id} / {user.name} / {user.email}</li>
    );
}

function UserList(){
    const users = [
        {
            id: 0,
            name: 'jjangu',
            email: 'jjangu00@gmail.com',
        },
        {
            id: 1,
            name: 'yuri',
            email: 'yuririri@gmail.com',
        },
        {
            id: 2,
            name: 'chita',
            email: 'imchita@gmail.com',
        },
    ];

    return(
        <div>
            <h3>users[index]</h3>
            <ol>
                <User user={users[0]} />
                <User user={users[1]} />
                <User user={users[2]} />
            </ol>
            <h3>users.map()</h3>
            <ol>
                {users.map(user => (
                    <User user={user} />
                ))}
            </ol>
        </div>
    );
}

export default UserList;

