// Error Messages
const FirstNameErrorMessage = () => {
    return (
        <p className="field-error">First name should have at least 3 characters</p>
    )
}

const LastNameErrorMessage = () => {
    return (
        <p className="field-error">Last name should have at least 2 characters</p>
    )
}

const PasswordErrorMessage = () => {
    return (
        <p className="field-error">Password should have at least 8 characters</p>
    )
}

const EmailErrorMessage = () => {
    return (
        <p className="field-error">Email should be like: example@mail.com</p>
    )
}

const PhoneErrorMessage = () => {
    return (
        <p className="field-error">Phone number must contain 10 numbers</p>
    )
}

// Validation Functions
const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(email)) {
        return true;
    } else {
        return false;
    }
}

const validatePhone = (phone) => {
    const phonePattern = /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;

    if (phonePattern.test(phone)) {
        return true;
    } else {
        return false;
    }
}

export {
    FirstNameErrorMessage,
    LastNameErrorMessage,
    EmailErrorMessage,
    PhoneErrorMessage,
    PasswordErrorMessage,
    validateEmail,
    validatePhone
}