// Error Messages
// Login Form Error Messages

export const FirstNameErrorMessage = ({ isError }) => {
        return (
            <p className={`field-error ${isError ? 'visible' : ''}`}>
                First name should have at least 3 characters
            </p>
        );
}

export const LastNameErrorMessage = ({ isError }) => {
    return (
        <p className={`field-error ${isError ? 'visible' : ''}`}>
            Last name should have at least 2 characters
        </p>
    );
}

export const PasswordErrorMessage = ({ isError }) => {
    return (
        <p className={`field-error ${isError ? 'visible' : ''}`}>
            Password should have at least 8 characters
        </p>
    );
}

export const EmailErrorMessage = ({ isError }) => {
    return (
        <p className={`field-error ${isError ? 'visible' : ''}`}>
            Email should be like: example@mail.com
        </p>
    );
}

export const PhoneErrorMessage = ({ isError }) => {
    return (
        <p className={`field-error ${isError ? 'visible' : ''}`}>
            Phone number must contain 10 numbers
        </p>
    );
}

// Reservation Form Error messages

export const DateErrorMessage = ({ isError }) => {
    return (
        <p className={`field-error ${isError ? 'visible' : ''}`}>
            Please select a date
        </p>
    );
}

export const GuestErrorMessage = () => {
    return (
        <p className="field-error visible">Please call us to make a reservation for more than 10 people.</p>
    )
}
// Validation Functions
export const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(email)) {
        return true;
    } else {
        return false;
    }
}

export const validatePhone = (phone) => {
    const phonePattern = /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;

    if (phonePattern.test(phone)) {
        return true;
    } else {
        return false;
    }
}

// Placeholder area
export const PlaceholderArea = () => {
    return (
        <p className="field-error">This is invisible placeholder area.</p>
    )
}