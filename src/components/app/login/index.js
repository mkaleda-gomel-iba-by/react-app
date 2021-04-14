import React, { useEffect, useState } from 'react';
import './index.css';
import Input from './input';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/user';
import { useHistory } from 'react-router-dom';

function LoginPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [isValid, setIsValid] = useState(false);
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const validateUsername = (value) =>
        setIsUsernameValid(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/.test(value));
    const passwordValidation = (value) =>
        setIsPasswordValid(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value));

    useEffect(() => setIsValid(isUsernameValid && isPasswordValid), [
        isUsernameValid,
        isPasswordValid,
    ]);

    const loginHandler = (event) => {
        dispatch(
            login({
                username: event.target[0].value.trim(),
                password: event.target[1].value.trim(),
            })
        );
        history.push('/');
        // event.preventDefault();
    };

    return (
        <div id="login">
            <div className="container">
                <div
                    id="login-row"
                    className="row justify-content-center align-items-center"
                >
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form
                                id="login-form"
                                className="form"
                                onSubmit={(event) => loginHandler(event)}
                            >
                                <h3 className="text-center text-info">Sign in</h3>
                                <Input
                                    id={'username'}
                                    labelText={'Username:'}
                                    validationFunc={validateUsername}
                                />
                                <Input
                                    id={'password'}
                                    labelText={'Password:'}
                                    validationFunc={passwordValidation}
                                />
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        className="btn btn-info btn-md"
                                        value="Sign in"
                                        disabled={!isValid}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
