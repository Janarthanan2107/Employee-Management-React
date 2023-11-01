import { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { NavLink, useParams } from "react-router-dom";

const SingleEmployer = () => {
  const { devName } = useParams();
  // console.log("useParams=", useParams());

  const [employer, setEmployer] = useState(null);

  useEffect(() => {
    const storedEmployerData = JSON.parse(localStorage.getItem("employees"));
    // using useParams we can get the last name for it
    console.log("devName from URL:", String(devName).slice(1));

    if (storedEmployerData) {
      const employerDetails = storedEmployerData.find(
        (item) => item.devName === String(devName).slice(1)
      );
      console.log("Employer Details:", employerDetails);
      setEmployer(employerDetails);
    }
  }, [devName]);

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col gap-2 px-5">
      <h1 className="font-bold text-[1.3rem] text-center underline underline-offset-[10px] mt-3">
        Single Employer
      </h1>
      <div className="card shadow-md rounded-lg p-3">
        {employer ? (
          <>
            <div className="flex justify-content-between">
              <div className="flex items-center gap-5 w-[100%]">
                <p className="text-[2rem] text-purple-500">
                  {employer.devName}
                </p>
                <p className="text-gray-500">({employer.gender})</p>
              </div>
              <NavLink to={`/addEmployee/:${employer.id}`}>
                <button className="flex items-center w-[120px] gap-2 mt-2 bg-blue-500 py-2 px-2 rounded-md text-white font-semibold text-center">
                  <BiPencil />
                  <div className="w-[100%]">Edit post</div>
                </button>
              </NavLink>
            </div>
            <p>
              I'm a {employer.role}, with {employer.experience} years of
              experience.
            </p>
            <p className="text-[1.2rem] text-gray-600 font-semibold mt-5 underline">
              More about:
            </p>
            <p>{employer.about}</p>
          </>
        ) : (
          <p>Employer details not found.</p>
        )}
      </div>
    </div>
  );
};

export default SingleEmployer;
