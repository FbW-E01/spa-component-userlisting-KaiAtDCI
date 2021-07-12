import React from "react";

export default class UserList extends React.Component {

    onMouseEnter = (event) => {
        event.target.classList.add('active');
    }

    onMouseLeave = (event) => {
        event.target.classList.remove('active');
    }


    render() {
        return <>
            <ul className='list-group'>
                {
                    this.props.userList.map((user, index) => {
                        return (
                            <li className='list-group-item'
                                key={index}
                                onMouseEnter={this.onMouseEnter}
                                onMouseLeave={this.onMouseLeave}>

                                <div className='name'>Name: {user.name}</div>
                                <div className='username'>Username: {user.username}</div>
                                <div className='email'>E-mail: {user.email}</div>
                                <div className='city'>City: {user.address.city}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    }
}