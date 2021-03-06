import React from 'react';

class Login extends React.Component {

  componentDidMount() {
    this.props.updateLogout(false);
  }

    render() {
      // {'with_credentials': true}
        return (
            <div>
                <h1>Welcome to the Login Screen</h1>
                <div className="login__container">

                    <a href="https://kipp-madness-api.herokuapp.com/auth/google_oauth2">
                        <button className="kippBtn">Login with Google</button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Login;
