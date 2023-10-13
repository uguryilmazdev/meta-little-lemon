import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateErrorMessage, TimeErrorMessage, GuestErrorMessage, PlaceholderArea, formatDateToYYYYMMDD } from "../utils";
import { fetchAPI, submitAPI } from "../bookingData";

export default function FormBooking() {
    const [date, setDate] = useState({
        value: formatDateToYYYYMMDD(),
        isTouched: false,
    });
    const [time, setTime] = useState({
        value: "",
        isTouched: false,
    });
    const [timeArray, setTimeArray] = useState([]);
    const [guests, setGuests] = useState({
        value: "5",
        isTouched: false,
    });
    const [occasion, setOccasion] = useState({
        value: "",
        isTouched: false,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resultArray = await fetchAPI(date.value);
                setTimeArray(resultArray);
            } catch (error) {
                setTimeArray([]);
            }
        }
        fetchData();
    }, [date]);

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
        setTimeArray([]);
        setGuests({
            value: "",
            isTouched: false,
        });
        setOccasion({
            value: "",
            isTouched: false,
        });
    }

    const submitData = async () => {
        const formData = {
            date: date.value,
            time: time.value,
        }

        try {
            await submitAPI(formData);
        } catch (error) {
            console.error("Error", error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        submitData();
        clearForm();
        navigate("/");
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
                        <option value="" disabled hidden>Choose time</option>
                        {timeArray.map((time) => {
                            return <option value={time} key={time}>{time}</option>
                        })}
                    </select>
                    {timeArray.length === 0 ? (<TimeErrorMessage isError/>) : (<PlaceholderArea />)}
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