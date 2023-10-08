import { useState } from "react";
import {
    FirstNameErrorMessage,
    LastNameErrorMessage,
    EmailErrorMessage,
    PhoneErrorMessage,
    PasswordErrorMessage,
    validateEmail,
    validatePhone
} from "../utils";
import '../styles/Form.css'

export default function Form() {
    const [firstName, setFirstName] = useState({
        value: "",
        isTouched: false,
    });
    const [lastName, setLastName] = useState({
        value: "",
        isTouched: false,
    });
    const [email, setEmail] = useState({
        value: "",
        isTouched: false,
    });
    const [phone, setPhone] = useState({
        value: "",
        isTouched: false,
    });
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });

    const getIsFormValid = () => {
        return (
            firstName.value.length >= 3 &&
            lastName.value.length >= 2 &&
            validateEmail(email.value) &&
            validatePhone(phone.value) &&
            password.value.length >= 8
        )
    }

    const clearForm = () => {
        setFirstName({
            value: "",
            isTouched: false,
        });
        setLastName({
            value: "",
            isTouched: false,
        });
        setEmail({
            value: "",
            isTouched: false,
        });
        setPhone({
            value: "",
            isTouched: false,
        });
        setPassword({
            value: "",
            isTouched: false,
        });
    }

    const handleSubmit = (e) => {
        e.preveventDefault();
        clearForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <h2>Sign up</h2>
                <div className="form-field">
                    <label>First Name <sup>*</sup></label>
                    <input
                    type="text"
                    value={firstName.value}
                    onChange={(e) => setFirstName({...firstName, value: e.target.value})}
                    onBlur={() => setFirstName({...firstName, isTouched: true})}
                    placeholder="First name"
                    />
                    {firstName.isTouched && firstName.value.length < 3 ? (<FirstNameErrorMessage isError/>) : (<FirstNameErrorMessage />)}
                </div>
                <div className="form-field">
                    <label>Last Name <sup>*</sup></label>
                    <input
                    type="text"
                    value={lastName.value}
                    onChange={(e) => setLastName({...lastName, value: e.target.value})}
                    onBlur={() => setLastName({...lastName, isTouched: true})}
                    placeholder="Last name"
                    />
                    {lastName.isTouched && lastName.value.length < 2 ? (<LastNameErrorMessage isError/>) : (<LastNameErrorMessage />)}
                </div>
                <div className="form-field">
                    <label>Email Address <sup>*</sup></label>
                    <input
                    type="email"
                    value={email.value}
                    onChange={(e) => setEmail({...email, value: e.target.value})}
                    onBlur={() => setEmail({...email, isTouched: true})}
                    placeholder="Email address"
                    />
                    {email.isTouched && !validateEmail(email.value) ? (<EmailErrorMessage isError/>) : (<EmailErrorMessage />)}
                </div>
                <div className="form-field">
                    <label>Phone Number <sup>*</sup></label>
                    <input
                    type="tel"
                    maxLength="10"
                    value={phone.value}
                    onChange={(e) => setPhone({...phone, value: e.target.value})}
                    onBlur={() => setPhone({...phone, isTouched: true})}
                    placeholder="Phone Number"
                    />
                    {phone.isTouched && phone.value.length != 10 ? (<PhoneErrorMessage isError/>) : (<PhoneErrorMessage />)}
                </div>
                <div className="form-field">
                    <label>Password <sup>*</sup></label>
                    <input
                    type="password"
                    value={password.value}
                    onChange={(e) => setPassword({...password, value: e.target.value})}
                    onBlur={() => setPassword({...password, isTouched: true})}
                    placeholder="Password"
                    />
                    {password.isTouched && password.value.length < 8 ? (<PasswordErrorMessage isError/>) : (<PasswordErrorMessage />)}
                </div>
                <button type="submit" id="form-submit" disabled={!getIsFormValid()}>
                    Create Account
                </button>
            </fieldset>
        </form>
    )
}