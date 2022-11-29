import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  console.log('inside');
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const increamentHandler = () => {
    dispatch({ type: 'increament'})
  };
  const increamentBY5Handler = () => {
    dispatch({ type: 'increamentby5'})
  };
  const decreamentHandler = () => {
    dispatch({ type: 'decreament'})
  };

  const decreamentBY5Handler = () => {
    dispatch({ type: 'decreamentby5'})
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increamentHandler}>INCREAMENT</button>
        <button onClick={increamentBY5Handler}>INCREAMENTBY5</button>
        <button onClick={decreamentHandler}>DECREAMENT</button>
        <button onClick={decreamentBY5Handler}>DECREAMENTBY5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
