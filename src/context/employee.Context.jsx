import { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";

// create the context
const EmployeeContext = createContext();

// local storage
const lsData = localStorage.getItem("employees")
  ? JSON.parse(localStorage.getItem("employees"))
  : [];

// create the context provider
const EmployeeContextProvider = ({ children }) => {
  // database as of now
  const [items, setItems] = useState(lsData);

  // add data function
  const addEmployee = (newItem) => {
    setItems([...items, newItem]);
    toast.success("Data Added Successfully!");
  };

  // del data function
  const delEmployee = (id) => {
    const updatedTransactions = items.filter((item) => item.id !== id);
    setItems(updatedTransactions);
    toast.error("Data Successfully Deleted!");
  };

  // update function
  const updateEmployee = (updatedItem) => {
    // Map the items array to update the correct item
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );

    setItems(updatedItems);
    toast.success("Data Updated Successfully!");
  };

  // getting id
  const getEmployeeById = (id) => {
    return items.find((item) => item.id === id);
  };

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(items));
  }, [items]);

  //   assign the values
  const values = {
    items,
    addEmployee,
    delEmployee,
    updateEmployee,
    getEmployeeById,
  };

  return (
    // pass the values
    <EmployeeContext.Provider value={values}>
      {children}
    </EmployeeContext.Provider>
  );
};

// custom hooks
const useEmployeeContext = () => {
  // note: custom hook is a function so we need to return the useContext
  return useContext(EmployeeContext);
};

export { EmployeeContextProvider, useEmployeeContext };
