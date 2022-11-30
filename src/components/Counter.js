import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {
  console.log("inside");
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const increamentHandler = () => {
    dispatch(counterActions.increament());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, Payload: 10 }
  };
  const decreamentHandler = () => {
    dispatch(counterActions.decreament());
  };

  

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>INCREAMENT</button>
        <button onClick={increaseHandler}>INCREAMENTBY5</button>
        <button onClick={decreamentHandler}>DECREAMENT</button>
        
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
