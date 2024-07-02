import React, {useState, useEffect} from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date());

    const updateTime = () => {
        const interval = setInterval(() => {setTime(new Date());}, 1000);

        return () => clearInterval(interval);
    }   

    useEffect(updateTime, []);

    const formatTime = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        // return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
        return `${hours}:${padZero(minutes)}`;
    }

    const padZero = (num) => {
        if (num < 10) {
            return `0${num}`;
        }
        else {
            return num;
        }
    }

  return (
    <div className='Clock'>
        <span>{formatTime()}</span>
    </div>
  )
}

export default Clock