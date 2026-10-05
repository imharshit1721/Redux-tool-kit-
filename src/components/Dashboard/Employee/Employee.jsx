import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployee,
  toggleEmployeeStatus,
} from "../../../features/Employee/employeeSlice";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Employee() {
  const EmployeeData = useSelector((state) => state.employee.employeeData);
  const dispatch = useDispatch();
  const [Employeeform, setEmployeeform] = useState(false);
  console.log("employee data", EmployeeData);
  return (
    <div className="relative border border-gray-500 rounded-[10px] m-2">
      <div className="flex  justify-between items-center mx-[20px]">
        <div className="font-[Inter] mx-0 text-[20px] font-bold   mt-[20px] md:text-[23px] lg:text-[25px]  text-center  md:text-start md:mx-5 ">
          Employee Management System
        </div>

        <button
          onClick={() => setEmployeeform(!Employeeform)}
          className="bg-[#18181B] border border-gray-200  rounded-2xl p-3  text-[#FFFFFF] mt-[20px] cursor-pointer"
        >
          + Add Employee
        </button>
      </div>

      <div className="mx-4 flex flex-col g-3">
        {EmployeeData.map((element, index) => {
          return (
            <List
              key={element.id}
              id={element.id}
              name={element.name}
              status={element.status}
              department={element.department}
              dispatch={dispatch}
            />
          );
        })}
      </div>

      {Employeeform && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 pt-20 backdrop-blur-sm">
          <div
            className="
        relative
        w-full
        max-w-2xl
        overflow-hidden
        rounded-2xl
        border border-green-500
        bg-white
        shadow-2xl
      "
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-green-50 px-6 py-5">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Add New Employee
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Enter employee details to add a new employee.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setEmployeeform(false)}
                className="
            flex h-9 w-9 items-center justify-center
            rounded-full
            text-gray-500
            transition
            hover:bg-gray-200
            hover:text-gray-800
          "
              >
                <IoMdClose size={22} />
              </button>
            </div>

            {/* Form */}
            <form className="space-y-5 px-6 py-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    placeholder="Enter employee name"
                    className="
                w-full
                rounded-lg
                border border-gray-300
                bg-white
                px-4 py-3
                text-sm text-gray-800
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-green-500
                focus:ring-2
                focus:ring-green-100
              "
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    placeholder="Enter email address"
                    className="
                w-full
                rounded-lg
                border border-gray-300
                bg-white
                px-4 py-3
                text-sm text-gray-800
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-green-500
                focus:ring-2
                focus:ring-green-100
              "
                    required
                  />
                </div>
              </div>

              {/* Department + Salary */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Department */}
                <div>
                  <label
                    htmlFor="department"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Department <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="department"
                    className="
                w-full
                rounded-lg
                border border-gray-300
                bg-white
                px-4 py-3
                text-sm text-gray-700
                outline-none
                transition
                focus:border-green-500
                focus:ring-2
                focus:ring-green-100
              "
                    required
                  >
                    <option value="">Select department</option>
                    <option value="Development">Development</option>
                    <option value="HR">HR</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>

                {/* Salary */}
                <div>
                  <label
                    htmlFor="salary"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Salary <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                      ₹
                    </span>

                    <input
                      type="number"
                      id="salary"
                      placeholder="Enter salary"
                      className="
                  w-full
                  rounded-lg
                  border border-gray-300
                  bg-white
                  py-3 pl-9 pr-4
                  text-sm text-gray-800
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-green-500
                  focus:ring-2
                  focus:ring-green-100
                "
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Status <span className="text-red-500">*</span>
                </label>

                <div className="grid grid-cols-2 overflow-hidden rounded-lg border border-gray-300">
                  <button
                    type="button"
                    className="
                border-r border-gray-300
                bg-green-50
                py-3
                text-sm
                font-semibold
                text-green-700
                transition
                hover:bg-green-100
              "
                  >
                    ● Active
                  </button>

                  <button
                    type="button"
                    className="
                bg-white
                py-3
                text-sm
                font-semibold
                text-gray-500
                transition
                hover:bg-gray-50
              "
                  >
                    ● Inactive
                  </button>
                </div>
              </div>
            </form>

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t border-gray-200 bg-gray-50 px-6 py-4">
              <button
                type="button"
                onClick={() => setEmployeeform(false)}
                className="
            rounded-lg
            border border-gray-300
            bg-white
            px-5 py-2.5
            text-sm
            font-semibold
            text-gray-600
            transition
            hover:bg-gray-100
          "
              >
                Cancel
              </button>

              <button
                type="submit"
                className="
            rounded-lg
            border border-green-700
            bg-green-600
            px-5 py-2.5
            text-sm
            font-semibold
            text-white
            shadow-sm
            transition
            hover:bg-green-700
            hover:shadow-md
          "
              >
                + Add Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const List = ({ id, name, status, department, dispatch }) => {
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
            <button
              onClick={() => dispatch(toggleEmployeeStatus(id))}
              className="cursor-pointer bg-[#D7F1E1] rounded-2xl  py-1  px-2 text-[#669879]"
            >
              Active{" "}
            </button>
          ) : (
            <button
              onClick={() => dispatch(toggleEmployeeStatus(id))}
              className="cursor-pointer bg-[#E9E9E7] rounded-2xl py-1 px-2 text-black"
            >
              Inactive{" "}
            </button>
          )}

          <button
            onClick={() => dispatch(deleteEmployee(id))}
            className="py-2 px-3 rounded-2xl text-[#E9E9E7] border border-[#E9E9E7] cursor-pointer "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
