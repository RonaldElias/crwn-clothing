import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';


class SignIn extends React.Component{
    constructor(props){
        super(props);
            
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({ email: '', password: ' '});
    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({ [name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I Already have an Account</h2>
                <span>Sign with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email'
                    type='email' 
                    handleChange={this.handleChange }
                    value={ this.state.email } 
                    label="email"
                    required
                     />
                    
                    <FormInput
                     name='password'
                     type='password'
                     handleChange={this.handleChange } 
                     value={ this.state.password } 
                     label="password"
                     required
                      />
                   
                    <div className='buttons'>
                    <CustomButton type="submit"  > Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }

}

export default SignIn;