import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateErrorMessage, GuestErrorMessage, PlaceholderArea } from "../utils";

export default function FormReservation() {
    const [date, setDate] = useState({
        value: "",
        isTouched: false,
    });
    const [time, setTime] = useState({
        value: "",
        isTouched: false,
    });
    const [guests, setGuests] = useState({
        value: "",
        isTouched: false,
    });
    const [occasion, setOccasion] = useState({
        value: "",
        isTouched: false,
    });

    const navigate = useNavigate();

    const getIsFormValid = () => {
        return (
            date.value !== ""
        )
    }

    const clearForm = () => {
        setDate({
            value: "",
            isTouched: false,
        });
        setTime({
            value: "",
            isTouched: false,
        });
        setGuests({
            value: "",
            isTouched: false,
        });
        setOccasion({
            value: "",
            isTouched: false,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
        navigate("/reservation/valid");
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <h2>Make Reservation</h2>
                <div className="form-field">
                    <label>Choose date:</label>
                    <input
                    type="date"
                    value={date.value}
                    onChange={(e) => setDate({...date, value: e.target.value})}
                    onBlur={() => setDate({...date, isTouched: true})}
                    />
                    {date.isTouched && !date.value ? (<DateErrorMessage isError/>) : (<DateErrorMessage />)}
                </div>
                <div className="form-field">
                    <label>Choose time:</label>
                    <select
                    name="reservation-time"
                    id="reservation-time"
                    value={time.value}
                    onChange={(e) => setTime({...time, value: e.target.value})}
                    >
                        <option value="17.00">17.00</option>
                        <option value="18.00">18.00</option>
                        <option value="19.00">19.00</option>
                        <option value="20.00">20.00</option>
                        <option value="21.00">21.00</option>
                    </select>
                    <PlaceholderArea />
                </div>
                <div className="form-field">
                    <label>Number of Guest: {guests.value}</label>
                    <input
                    type="range"
                    value={guests.value}
                    min={2}
                    max={10}
                    onChange={(e) => setGuests({...guests, value: e.target.value})}
                    />
                    <GuestErrorMessage />
                </div>
                <div className="form-field">
                    <label>Occasion:</label>
                    <select
                    name="occasion"
                    id="occasion"
                    value={occasion.value}
                    onChange={(e) => setOccasion({...occasion, value: e.target.value})}
                    >
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="meeting">Meeting</option>
                    </select>
                    <PlaceholderArea />
                </div>
                <button type="submit" className="form-submit" disabled={!getIsFormValid()}>
                    Make Reservation
                </button>
            </fieldset>
        </form>
    )

}