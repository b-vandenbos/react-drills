import React, {Component} from 'react';

export default class Login extends Component {
constructor() {
    super();

    this.state = {
        username: '',
        password: ''
    }

    this.loginButton = this.loginButton.bind(this);
}

trackUsername(val) {
    this.setState({username: val});
}

trackPassword(val) {
    this.setState({password: val});
}

loginButton() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
}

render() {
    return (
        <div>
            <span>username</span>
            <input onChange={(e) => this.trackUsername(e.target.value)} />
            <span>password</span>
            <input onChange={(e) => this.trackPassword(e.target.value)} />
            <button onClick={this.loginButton}>Login</button>
        </div>
    )
}



}