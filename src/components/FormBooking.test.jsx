import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import FormBooking from "./FormBooking";
import { fetchAPI, submitAPI } from "../bookingData";
import { useNavigate } from "react-router-dom";
import React from "react";

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
  }));

jest.mock('../bookingData', () => ({
    fetchAPI: jest.fn(),
    submitAPI: jest.fn(),
}));

describe('Fetch data', () => {
    const navigate = jest.fn();
    useNavigate.mockImplementation(() => navigate);

    test('Test fetchAPI in useEffect', async () => {
      // data from fetchAPI
      const mockTimeArray = ['10:00', '11:00', '12:00'];
      fetchAPI.mockResolvedValue(mockTimeArray);

      render(<FormBooking />);

      // await fetchAPI
      await screen.findByText('Choose time:');

      // check fetchAPI is calling
      expect(fetchAPI).toHaveBeenCalledWith(expect.any(String));

      // check fetchAPI's result
      const timeArray = screen.getAllByTestId('time')
      expect(timeArray[0]).toBeInTheDocument();
      expect(timeArray[1]).toBeInTheDocument();
      expect(timeArray[2]).toBeInTheDocument();
    });
  });

describe("Show error message when invalid input", () => {
    const navigate = jest.fn();
    useNavigate.mockImplementation(() => navigate);

    test("Date", () => {
        render(<FormBooking />);

        const invalidInputData = "";

        const input = screen.getByLabelText("date");
        fireEvent.change(input, { target: { value: invalidInputData } });
        fireEvent.blur(input);
        const errorMessage = screen.getByText("Please select a date");
        expect(errorMessage).toHaveProperty("previousSibling", input)
    });

    test("Time", () => {
        render(<FormBooking />);

        const invalidInputData = "";
        const validDateDate = '2023-10-04';

        const dateInput = screen.getByLabelText("date");
        const timeInput = screen.getByLabelText("time");
        fireEvent.change(dateInput, { target: { value: validDateDate } });
        fireEvent.change(timeInput, { target: { value: invalidInputData } });
        fireEvent.blur(dateInput);
        fireEvent.blur(timeInput);
        const errorMessage = screen.getByText("All hours are full on that day. Please try another day.")
        expect(errorMessage).toHaveProperty("previousSibling", timeInput);
    })
})

