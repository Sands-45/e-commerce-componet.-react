<div className="flex space-x-4">
  <button
    onClick={() => setCount(count === 1 ? count : count - 1)}
    className="bg-[#ffc300] w-8 p-2 rounded-md hover:opacity-50 transition-opacity duration-500 text-lg font-bold"
  >
    -
  </button>
  <small className="items-center flex text-lg  text-white">{count}</small>
  <button
    onClick={() => setCount(count + 1)}
    className="bg-[#ffc300] w-8 p-2  rounded-md hover:opacity-50 transition-opacity duration-500 text-lg font-bold"
  >
    +
  </button>
</div>;
