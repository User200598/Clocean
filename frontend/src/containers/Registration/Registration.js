import './Registration.css';
import React, { Component } from 'react';

// redux
import {connect} from 'react-redux';
import * as register from '../../store/action/register';

class Registration extends Component {

    componentDidMount () {
        this.props.login();
        console.log('Component did moiunt is running')
        console.log('props',this.props)
    }

    render() {
        return (
            <div className={'nav_list '+this.props.class}>
                <ul>
                    <a href='#'>Home</a>
                    <a href='#'>Home</a>
                    <a href='#'>Home</a>
                    <a href='#'>Home</a>
                    <a href='#'>Home</a>
                    <a href='#'>Home</a>
                </ul>
            </div>
        );
    }
}

// here state given by redux which provided in reducer
// we use this.props.[state value] eg. this.props.loginDetails instead of this.state.[value] eg. this.state.loginDetails
const mapStateToProps = state =>{
    return{
        loginDetails: state.loginDetails,
        error: state.error,
    }
}

const mapDispatchToProps = dispatch=>{
return{
    login:()=>{ dispatch(register.initLogin())}
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Registration);
