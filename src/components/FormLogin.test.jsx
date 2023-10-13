import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import FormLogin from "./FormLogin";

describe("Show error message when invalid input", () => {
    test("First name", () => {

        render(<FormLogin />);

        const invalidInputData = "ab";

        const input = screen.getByLabelText("firstName");
        fireEvent.change(input, { target: { value: invalidInputData } });
        fireEvent.blur(input);
        const errorMessage = screen.getByText("First name should have at least 3 characters")
        expect(errorMessage).toHaveProperty("previousSibling",input)
    });

    test("Last name", () => {
        render(<FormLogin />);

        const invalidInputData = "a";

        const input = screen.getByLabelText("lastName");
        fireEvent.change(input, { target: { value: invalidInputData } });
        fireEvent.blur(input);
        const errorMessage = screen.getByText("Last name should have at least 2 characters")
        expect(errorMessage).toHaveProperty("previousSibling",input)
    });

    test("Email", () => {
        render(<FormLogin />);

        const invalidInputData = "invalid-email";

        const input = screen.getByLabelText("email");
        fireEvent.change(input, { target: { value: invalidInputData } });
        fireEvent.blur(input);
        const errorMessage = screen.getByText("Email should be like: example@mail.com")
        expect(errorMessage).toHaveProperty("previousSibling",input)
    });

    test("Phone Number", () => {
        render(<FormLogin />);

        const invalidInputData = "12345678";

        const input = screen.getByLabelText("phoneNumber");
        fireEvent.change(input, { target: { value: invalidInputData } });
        fireEvent.blur(input);
        const errorMessage = screen.getByText("Phone number must contain 10 numbers")
        expect(errorMessage).toHaveProperty("previousSibling",input)
    });

    test("Password", () => {
        render(<FormLogin />);

        const invalidInputData = "123";

        const input = screen.getByLabelText("password");
        fireEvent.change(input, { target: { value: invalidInputData } });
        fireEvent.blur(input);
        const errorMessage = screen.getByText("Password should have at least 8 characters")
        expect(errorMessage).toHaveProperty("previousSibling",input)
    });
});

test("Clear input areas after submitting", () => {
    render(<FormLogin />);

    const inputFields = Object.keys({
        firstName: "example",
        lastName: "example",
        email: "example@gmail.com",
        phone: "1234567890",
        password: "asdfghqw",
      });

      inputFields.forEach((fieldName) => {
        const input = screen.getByLabelText(new RegExp(fieldName, "i"));
        fireEvent.change(input, { target: { value: inputFields[fieldName] } });
      });

      const submitButton = screen.getByRole("button", { name: /Create Account/i });
      fireEvent.click(submitButton);

      inputFields.forEach((fieldName) => {
        const input = screen.getByLabelText(new RegExp(fieldName, "i"));
        expect(input).toHaveValue("");
      });
});

