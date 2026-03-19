"use client"

import React, {useState, useEffect} from 'react';

function TodayDate(){

const [currentDate, setCurrentDate] = useState(new Date());

useEffect(() => {
const intervalId = setInterval(() => {
    setCurrentDate(new Date());
}, 1000);

return () => 
    clearInterval(intervalId);

}, []);

function formatDate() {
    const date = currentDate.toDateString();
   return `${date},`;
}

 return(
    <div className='date-container'>
            <div className='today-date'>
                <span>{formatDate()}</span>
            </div>
    </div>
    );
}

export default TodayDate;