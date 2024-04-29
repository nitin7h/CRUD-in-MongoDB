import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const people1 = [
  {
    name: "John Doe",
    title: "Front-end Developer",
    department: "Engineering",
    email: "john@devui.com",
    role: "Developer",
    image:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  },
  {
    name: "Jane Doe",
    title: "Back-end Developer",
    department: "Engineering",
    email: "jane@devui.com",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
];
export default function Home() {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/getuserAll");
        setPeople(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // for deleting
  const deletButton = async (userid) => {
    try {
      await axios
        .delete(`http://localhost:9000/delete/${userid}`)
        .then((res) => {
          // setPeople((prevUser) => {
          //   prevUser.filter((people) => {
          //     people._id !== userid;
          //   });
          // });
          // const updatedItems = people.filter((_id) => people._id !== userid);
          // Set the state with the updated array
          // setPeople(updatedItems);

          alert(res.data.message);
          // navigate("/addUser");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {" "}
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold text-red-600">Employees</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit
              or delete existing ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Link to="/addUser"> Add new employee</Link>
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-yellow-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-pink-700"
                      >
                        <span>Employee</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-pink-700"
                      >
                        Title
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-pink-700"
                      >
                        E-Mail
                      </th>

                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person, index) => (
                      <tr key={person._id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              {/* <img
                                className="h-10 w-10 rounded-full object-cover"
                                // src={person.image}
                                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                                alt=""
                              /> */}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {person.name}
                              </div>
                              {/* <div className="text-sm text-gray-700">
                                {person.email}
                              </div> */}
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {person.title}
                          </div>
                          <div className="text-sm text-gray-700">
                            {person.department}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {person.email}
                          </div>
                        </td>
                        {/* <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {person.role}
                        </td> */}
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          {/* <a href="#" className="text-gray-700">
                            Edit
                          </a> */}
                          <Link
                            to={`/update/` + person._id}
                            className="text-gray-700"
                          >
                            <i
                              class="fa-solid fa-pen-to-square"
                              style={{ color: "#FFD43B" }}
                            ></i>
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          {/* <a href="#" className="text-gray-700">
                           
                            
                          </a> */}
                          {/* <Link
                            to={`/delete/` + person._id}
                            className="text-gray-700"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </Link> */}

                          <button
                            className="text-gray-700"
                            onClick={() => deletButton(person._id)}
                          >
                            <i
                              className="fa-solid fa-trash"
                              style={{ color: "#74C0FC" }}
                            ></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
