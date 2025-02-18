import React, { useEffect, useState } from "react";

function Base() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // componentDidMount
  useEffect(() => {
    console.log(`Component Mounted`);
    const timeout = setTimeout(() => {
      setData(`Data Loaded Successfully!`);
    }, 2000);

    return () => clearTimeout(timeout); 
  }, []);

  // componentDidUpdate 
  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  //componentWillUnmount 
  useEffect(() => {
    if (!isRunning) return;

    console.log("Time started");
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log(`Time Stopped`);
    };
  }, [isRunning]); 

  return (
    <div>
      <h2>Fetching Data...</h2>
      <p>{data || "Loading..."}</p>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <h2>Timer: {time}s</h2>
      <button onClick={() => setIsRunning(false)}>Stop Timer</button>
      {!isRunning && <p>Timer Stopped! Click refresh to restart.</p>}
    </div>
  );
}

export default Base;
