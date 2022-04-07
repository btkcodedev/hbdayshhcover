import React, { useState, useEffect, useRef } from "react";
import Countdown from "./Countdown";
import Result from "./result";
// import Confetti from 'react-confetti'
// import useWindowSize from 'react-use/lib/useWindowSize'
// import Splash from "./splash";
// var seconds = 1000;
// var minutes = detik * 60;
// var hours = menit * 60;
// var days = jam * 24;

// var aim = "Apr 3, 2022 00:00:00";
// var dateobject = new Date(aim).getTime();
// var x = setInterval(function () {
//     var todaytime = new Date().getTime();
//     var jarak = dateobject - todaytime;

//     // Tampil hari jam menit detik
//     var daysn = Math.floor(jarak / (days));
//     var hoursn =Math.floor((jarak % (days)) / (hours));
//     var minutesn =Math.floor((jarak % (hours)) / (minutes));
//     var secondsn =Math.floor((jarak % (minutes)) / seconds);
//     if (jarak < 0) {
//     }
//     console.log(harin, jamn, menitn, detikn);
//   }, 1000)

const Birthday = ({ name, day, month }) => {
  // useState Hooks

  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItBday: false
  });

  if (name === undefined || day === undefined || month === undefined) {
    name = "Ayshh";
    month = 4;
    day = 7;
  }

  // get current time
  const currentTime = new Date();
  // console.log(currentTime);
  // get current year
  const currentYear = currentTime.getFullYear();

  // Getting the Birthday in Data Object
  // WE subtract 1 from momnth ; Months start from 0 in Date Object
  // Bithday Boolean
  var aim = "Apr 7, 2022 00:00:00";
  var dateobject = new Date(aim).getTime();
  var todaytime = new Date().getTime();
  var jarak = dateobject - todaytime;

  const isItBday =
    currentTime.getDate() === day && currentTime.getMonth() === month - 1 && jarak < 0


  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
        // Getting the Current Date
        const dateAtm = new Date();
        console.log(jarak, isItBday );
        // if the Birthday has passed
        // then set the Birthday countdown for next year
        let birthdayDay = new Date(currentYear, month - 1, day);

        if (dateAtm > birthdayDay) {
          birthdayDay = new Date(currentYear + 1, month - 1, day);
        } 
        else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
          birthdayDay = new Date(currentYear, month - 1, day);
        }

        // Getitng Current Time
        const currentTime = dateAtm.getTime();
        // Getting Birthdays Time
        const birthdayTime = birthdayDay.getTime();

        // Time remaining for the Birthday
        const timeRemaining = birthdayTime - currentTime;

        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        // Setting States
        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
          isItBday
        }));

      };
      if (!isItBday) {
        countdown();
      } else {
        setState((prevState) => ({
          ...prevState,
          isItBday: true
        }));
      }
    }, 1000);
  }, [currentYear, day, isItBday, month, jarak]);

  let birth = new Date(currentYear, month - 1, day);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let monthBday = monthNames[birth.getMonth()];
  // const { width, height } = useWindowSize()

  // const anim = useRef(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     anim.current = false;
  //   }, 3000);
  // }, []);
// console.log(anim)

  return (

    <div className="page">
      {!isItBday && (
        <>
        <Countdown countdownData={state} name={name} />
          <div className="birthdate">
            Birth-Date: {day} {monthBday} {currentYear}
          </div>
        </>
      )}
      
      {isItBday && (
        <>
        {/* <Splash /> */}
        {/* <Confetti
          width={width}
          height={height}
          run={anim}
          numberOfPieces="10"/> */}
        <Result />
        </>
      )}
    </div>
  );
};

export default Birthday;
