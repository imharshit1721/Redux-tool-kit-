import { useSelector } from "react-redux";

export default function Employee() {
  const EmployeeData = useSelector((state) => state.Employee.employeeData);
  return (
    <>
      <div className="font-[Inter] mx-0 text-[20px] font-bold   mt-[20px] md:text-[23px] lg:text-[25px]  text-center  md:text-start md:mx-5 ">
        Employee Management System
      </div>
    </>
  );
}


