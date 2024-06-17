import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../../../../contexts/ThemeProvider';
import './style.scss';

const TimeInput = ({ onHourChange, onMinuteChange }) => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const { theme } = useContext(ThemeContext);

    const handleHoursChange = (event) => {
        const value = event.target.value;
        if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 100)) {
            setHours(value);
            onHourChange(value);
        }
    };

    const handleMinutesChange = (event) => {
        const value = event.target.value;
        if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 59)) {
            setMinutes(value);
            onMinuteChange(value);
        }
    };

    return (
        <div className="time-input">
            <input
                type="number"
                id="hours"
                value={hours}
                onChange={handleHoursChange}
                min="0"
                max="100"
                placeholder="00"
                style={{ borderColor: theme.gray7, color: theme.gray12 }}

            />
            <span>:</span>
            <input
                type="number"
                id="minutes"
                value={minutes}
                onChange={handleMinutesChange}
                min="0"
                max="59"
                placeholder="00"
                style={{ borderColor: theme.gray7, color: theme.gray12 }}
            />
        </div>
    );
};

export default TimeInput;

