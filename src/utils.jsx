import PropTypes from "prop-types"

// Error Messages
const FirstNameErrorMessage = ({ isError }) => {
        FirstNameErrorMessage.propTypes = {
            isError: PropTypes.boolean,
        }

        if (isError) {
            return (
                <p className="field-error visible">First name should have at least 3 characters</p>
            )
        } else {
            return (
                <p className="field-error">First name should have at least 3 characters</p>
            )
        }
}

const LastNameErrorMessage = ({ isError }) => {
    LastNameErrorMessage.propTypes = {
        isError: PropTypes.boolean,
    }

    if (isError) {
        return (
            <p className="field-error visible">Last name should have at least 2 characters</p>
        )
    } else {
        return (
            <p className="field-error">Last name should have at least 2 characters</p>
        )
    }
}

const PasswordErrorMessage = ({ isError }) => {
    PasswordErrorMessage.propTypes = {
        isError: PropTypes.boolean,
    }

    if (isError) {
        return (
            <p className="field-error visible">Password should have at least 8 characters</p>
        )
    } else {
        return (
            <p className="field-error">Password should have at least 8 characters</p>
        )
    }
}

const EmailErrorMessage = ({ isError }) => {
    EmailErrorMessage.propTypes = {
        isError: PropTypes.boolean,
    }

    if (isError) {
        return (
            <p className="field-error visible">Email should be like: example@mail.com</p>
        )
    } else {
        return (
            <p className="field-error">Email should be like: example@mail.com</p>
        )
    }
}

const PhoneErrorMessage = ({ isError }) => {
    PhoneErrorMessage.propTypes = {
        isError: PropTypes.boolean,
    }

    if (isError) {
        return (
            <p className="field-error visible">Phone number must contain 10 numbers</p>
        )
    } else {
        return (
            <p className="field-error">Phone number must contain 10 numbers</p>
        )
    }
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