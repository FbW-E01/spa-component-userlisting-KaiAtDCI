import React from "react";
import UserList from "./UserList";
import './App.scss';

const URL = 'https://jsonplaceholder.typicode.com/users';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: null,
        }
        this.fetchUserList = this.fetchUserList.bind(this);
    }

    fetchUserList() {
        fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({userList: data}));
    }

    render() {
        return (
            <>
                <div className="App">
                    <h1>User Listing</h1>
                    <input type='button' className='my-2' value='Get user list' onClick={this.fetchUserList}/>
                    {
                        this.state.userList
                            ? <UserList userList={this.state.userList}/>
                            : <div>No data loaded. Click 'Get user list'-Button</div>
                    }
                </div>
            </>

        );
    }
}
