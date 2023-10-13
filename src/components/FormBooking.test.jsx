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

describe('FormBooking Component', () => {
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
      expect(screen.getByLabelText('time')).toBeInTheDocument();
    });
  });

