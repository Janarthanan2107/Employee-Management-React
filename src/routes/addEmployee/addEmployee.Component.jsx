import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import { useEmployeeContext } from "../../context/employee.Context";
import { useNavigate, useParams } from "react-router-dom";

const AddEmployee = () => {
  // Import the database from context
  const { addEmployee, getEmployeeById, updateEmployee } = useEmployeeContext();

  // Params value
  const { empId } = useParams();

  // navigate
  const navigate = useNavigate();

  // States
  const [employee, setEmployee] = useState({
    devName: "",
    role: "",
    experience: "",
    gender: "",
    about: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Destructure
  const { devName, role, experience, gender, about } = employee;

  // onChangeHandler
  const onChangeHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setEmployee({ ...employee, [key]: value });
  };

  // Radio button handler
  const onGenderChange = (e) => {
    setEmployee({ ...employee, gender: e.target.value });
  };

  useEffect(() => {
    if (empId) {
      setIsEditing(true);
      const employee = getEmployeeById(empId.slice(1));

      if (employee) {
        // Set the employee data in state
        setEmployee(employee);
      }
    }
  }, [empId]);

  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Handle editing logic here
      if (devName && role && gender) {
        // Create an updated employee object
        const updatedItem = {
          id: empId.slice(1), // Use the existing ID
          devName,
          role,
          experience,
          gender,
          about,
        };

        console.log("updated Item:", updatedItem);
        updateEmployee(updatedItem);

        setIsEditing(false);

        // Reset form values
        setEmployee({
          devName: "",
          role: "",
          experience: "",
          gender: "",
          about: "",
        });
      } else {
        toast.error("Name, Role, and Gender fields are mandatory for editing!");
      }
    } else {
      if (devName && role && gender) {
        // create object
        const data = {
          id: uuidv4(),
          devName,
          role,
          experience,
          gender,
          about,
        };

        addEmployee(data);

        // Reset form values
        setEmployee({
          devName: "",
          role: "",
          experience: "",
          gender: "",
          about: "",
        });
      } else {
        toast.error("Name, Role, and Gender fields are mandatory!");
      }
    }

    setTimeout(() => {
      navigate("/employers");
    }, 2000);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex justify-center items-center flex-col gap-2">
      <Toaster />
      <h1 className="text-[1.5rem] font-bold underline underline-offset-4">
        {isEditing ? "Edit Employee" : "Add Employee"}
      </h1>
      <div className="form-container flex justify-center items-center flex-col shadow-md rounded-md p-3">
        <form className="form flex flex-col gap-3" onSubmit={submitHandler}>
          {/* name */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold mx-1">Name</label>
            <input
              type="text"
              className="px-3 py-2 rounded-md border border-gray-300 w-[400px]"
              placeholder="Enter employee name"
              value={devName}
              name="devName"
              onChange={onChangeHandler}
            />
          </div>
          {/* role */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold mx-1">Role</label>
            <input
              type="text"
              className="px-3 py-2 rounded-md border border-gray-300 w-[400px]"
              placeholder="Enter your role"
              value={role}
              name="role"
              onChange={onChangeHandler}
            />
          </div>
          {/* gender radio buttons */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold mx-1">Gender</label>
            <span className="flex items-center gap-3">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={onGenderChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={onGenderChange}
                />{" "}
                Female
              </label>
            </span>
          </div>
          {/* yr of exp */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold mx-1">Year of Experience</label>
            <input
              type="number"
              className="px-3 py-2 rounded-md border border-gray-300 w-[400px]"
              placeholder="Enter year of experience"
              value={experience}
              name="experience"
              onChange={onChangeHandler}
            />
          </div>
          {/* about me more */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold mx-1">More About</label>
            <textarea
              type="text"
              className="px-3 py-2 rounded-md border border-gray-300 w-[400px]"
              placeholder="Add more information about me!"
              value={about}
              name="about"
              onChange={onChangeHandler}
            />
          </div>
          {/* submit */}
          <button
            type="submit"
            className="mt-2 bg-blue-500 py-2 px-2 rounded-md text-white font-semibold text-center"
          >
            <span>{isEditing ? "Save Changes" : "Add"}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
