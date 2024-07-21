'use client';
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, substractOne } from "@/store/counter/counterSlice";

export const CartCounter = () => {


  const count = useAppSelector( state => state.counter.count );
  const dispatch = useAppDispatch();


  return (
    <>
      <span className="text-9xl"> { count } </span>
      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
