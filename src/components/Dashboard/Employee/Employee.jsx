import { useSelector } from "react-redux";

export default function Employee() {
  const EmployeeData = useSelector((state) => state.employee.employeeData);
  console.log("employee data", EmployeeData);
  return (
    <div className="border border-gray-500 rounded-[10px] m-2">
      <div className="font-[Inter] mx-0 text-[20px] font-bold   mt-[20px] md:text-[23px] lg:text-[25px]  text-center  md:text-start md:mx-5 ">
        Employee Management System
      </div>

      <div className="mx-4 flex flex-col g-3">
        {EmployeeData.map((element, index) => {
          return (
            <List
              key={element.id}
              name={element.name}
              status={element.status}
              department={element.department}
            />
          );
        })}
      </div>
    </div>
  );
}

const List = ({ name, status, department }) => {
  const initial = name
    .split(" ")
    .map((word) => word[0])
    .join(" ")
    .toUpperCase();
  return (
    <div className="mx-3 my-2">
      <div className="w-full  flex flex-row  items-center py-3 justify-between   border-b border-gray-600 ">
        <div className="flex items-center  gap-2">
          <div className="rounded-2xl border  border-gray-300  bg-[#F3F3F3] px-3 py-2">
            <p className="text-[15px] text-bold"> {initial}</p>
          </div>
          <div className="flex flex-col  items-start ">
            <p className="text-[20px] font-bold"> {name}</p>
            <p className="text-[13px] text-gray-600">{department}</p>
          </div>
        </div>

        <div className="flex gap-2">
          {status ? (
            <button className="bg-[#D7F1E1] rounded-2xl  py-1  px-2 text-[#669879]">
              Active{" "}
            </button>
          ) : (
            <button className="bg-[#E9E9E7] rounded-2xl py-1 px-2 text-black">
              Inactive{" "}
            </button>
          )}

          <button className="py-2 px-3 rounded-2xl text-[#E9E9E7] border border-[#E9E9E7] ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
