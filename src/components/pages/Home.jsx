import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByFive,
} from "../../features/Counter/CounterSlice";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Redux Toolkit Counter</h1>

      <h2 className="text-5xl font-bold">{count}</h2>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="rounded bg-green-600 px-5 py-3 text-white"
        >
          +
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="rounded bg-red-600 px-5 py-3 text-white"
        >
          -
        </button>
        <button
          onClick={() => dispatch(incrementByFive())}
          className="rounded  bg-gray-500 px-5 py-3 text-white"
        >
          +5
        </button>

        <button
          onClick={() => dispatch(reset())}
          className="rounded bg-gray-700 px-5 py-3 text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
