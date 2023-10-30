import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-2 h-[calc(100vh-10rem)] relative">
      <img
        src="/assets/asset-404.svg"
        alt="not-found"
        className="w-[300px]"
      />
      <h2 className="text-[100px] absolute mt-[3rem] text-gray-600">404</h2>
      <p className="text-gray-400 mt-3">Looks like you are lost.</p>
      <Link to="/">
        <button className="py-2 px-3 rounded-md bg-blue-600 text-white font-semibold text-lg mt-3">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
