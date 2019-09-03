import React, { useState, useEffect, useRef } from "react";
import moment from "moment";

const DateDisplay = ({ date }) => {
  // Store the **result** of converting the date to a string
  const [timeSince, setTimeSince] = useState(moment(date).fromNow());
  // `useRef` just keeps a handle on the timer,
  // so we can clear it if this component is unmounted
  // see: https://reactjs.org/docs/hooks-reference.html#useref
  const timer = useRef();

  // This effect creates a timer which runs every 5s to update the `timeSince`
  // state variable
  useEffect(() => {
    // `timer.current` is the current value for the ref, this is just the way
    // refs work
    timer.current = setInterval(() => {
      setTimeSince(moment(date).fromNow());
    }, 5000);

    // returning a function out of an effect allows us to clean up after this
    // component is unmounted.
    // i.e. if we try to run `setTimeSince` on an unmounted component our app
    // would break, so we have to make sure to clear the timer in the returned
    // function.
    return () => {
      clearInterval(timer.current);
    };
  }, [date]);

  return <span>{timeSince}</span>;
};

export default DateDisplay;
