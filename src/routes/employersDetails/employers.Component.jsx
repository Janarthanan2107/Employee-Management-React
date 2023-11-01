import { BiPencil, BiSolidTrashAlt } from "react-icons/bi";
import { Toaster } from "react-hot-toast";
import { useEmployeeContext } from "../../context/employee.Context";
import { NavLink } from "react-router-dom";

const Employers = () => {
  // import database from context
  const { items, delEmployee } = useEmployeeContext();

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col gap-2 px-5">
      <Toaster />
      <h1 className="font-bold text-[2rem] underline underline-offset-[10px]">
        Employers Zone
      </h1>
      <p>Every employer records are here:</p>
      {/* mapping the values from the local storages */}
      <div className="flex flex-wrap gap-2">
        {items.length > 0 ? (
          items.map((item, index) => {
            const { id, devName, role, gender, experience } = item;
            return (
              <div
                className="flex items-center shadow-md rounded-md p-4 mt-3 w-[330px]"
                key={index}
              >
                <NavLink to={`/employers/:${devName}`}>
                  <div className="cursor-pointer hover:text-rose-500 w-[210px]">
                    <div>
                      <span className="text-[18px] font-semibold mx-3">
                        {devName}
                      </span>
                      <span className="text-[12px] font-semibold text-gray-500">
                        ({gender})
                      </span>
                    </div>
                    <div>
                      <span className="text-[13px] font-semibold mx-3 text-gray-500">
                        {role}
                      </span>
                    </div>
                    <div>
                      <span className="text-[13px] font-medium mx-3 text-gray-400">
                        Experience: {experience}
                      </span>
                    </div>
                  </div>
                </NavLink>
                <div className="flex gap-2">
                  <NavLink to={`/addEmployee/:${id}`}>
                    <button className="py-2 px-3 text-white font-semibold rounded-md bg-violet-400 hover:bg-yellow-500">
                      <BiPencil />
                    </button>
                  </NavLink>
                  <button
                    className="py-2 px-3 text-white font-semibold rounded-md bg-red-400 hover:bg-red-800"
                    onClick={() => delEmployee(id)}
                  >
                    <BiSolidTrashAlt />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
      // if not records are there this condition will get it
          <div className="flex justify-center items-center shadow-md rounded-md p-5 mt-3">
            <p className="text-[1.25rem] font-semibold text-gray-500">
              No records found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employers;
