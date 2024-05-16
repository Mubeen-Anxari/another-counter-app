"use client";
import { useAppDispatch, useAppSelector } from "./hooks/hook";
import { decrement, increment, reset } from "./components/counterSlice";

export default function Home() {
  const counter = useAppSelector((state) => state.counter);
  const dispstch = useAppDispatch();
  return (
    <div >
      <div className="flex gap-2  justify-center items-center  mt-10">
        <button
          className=" bg-red-900 text-white p-1 rounded-lg "
          onClick={() => dispstch(decrement())}
        >
          Minus
        </button>
        {counter?.count}
        <button
          className=" bg-blue-900 text-white p-1 rounded-lg "
          onClick={() => dispstch(increment())}
        >
          Plus
        </button>
        
        <div>
        <button
          className=" bg-orange-700 text-white p-1 rounded-lg "
          onClick={() => dispstch(reset())}
        >
          Reset
        </button>
        </div>
      </div>
    </div>
  );
}
