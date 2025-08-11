// CountdownTimer.jsx
import React, { useEffect, useState } from 'react';

function CountdownTimer({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const { days, hours, minutes, seconds } = timeLeft;

    return (
        <div className="Timer_timer__3cc18">
            {`D-${days} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`}
        </div>
    );
}

function getTimeLeft(target) {
    const now = new Date();
    const end = new Date(`${target}T00:00:00`);
    end.setDate(end.getDate() + 1);

    const diff = end.getTime() - now.getTime();

    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
}

function pad(n) {
    return n.toString().padStart(2, '0');
}

export default CountdownTimer;
