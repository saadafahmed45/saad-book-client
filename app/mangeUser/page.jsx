"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { userData } from "../api/userData";
import UserDelete from "../components/userDelete";

const ManegUser = () => {
  // const users = await userData();

  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://saad-book-server.onrender.com/users/")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  console.log(users);
  // delete product

  const handleDelete = (_id) => {
    console.log("dlt", _id);

    fetch(`https://saad-book-server.onrender.com/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          location.reload();
        }
      });
  };

  return (
    <div className=' py-24'>
      <div className='flex flex-col bg-slate-700'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full text-center text-sm font-light text-surface dark:text-white'>
                <thead className='border-b border-neutral-200 font-medium dark:border-white/10'>
                  <tr>
                    <th scope='col' className='px-6 py-2'>
                      #
                    </th>
                    <th scope='col' className='px-6 py-2'>
                      Name
                    </th>
                    <th scope='col' className='px-6 py-2'>
                      Email
                    </th>
                    <th scope='col' className='px-6 py-2'>
                      Number
                    </th>
                    <th scope='col' className='px-6 py-2'>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(({ _id, name, email, number }) => (
                    <tr
                      className='border-b border-neutral-200 dark:border-white/10 text-left'
                      key={_id}>
                      <td className='whitespace-nowrap px-6 py-2 font-medium'>
                        1
                      </td>
                      <td className='whitespace-nowrap px-6 py-2'>{_id}</td>
                      <td className='whitespace-nowrap px-6 py-2'>{name}</td>
                      <td className='whitespace-nowrap px-6 py-2'>{email}</td>
                      <td className='whitespace-nowrap px-6 py-2'>{number}</td>
                      <td className='whitespace-nowrap px-6 py-2'>
                        <Link
                          href={`/mangeUser/${_id}`}
                          className='p-2 bg-blue-500 rounder-md'>
                          Edit{" "}
                        </Link>
                      </td>
                      <td className='whitespace-nowrap px-6 py-2'>
                        <button
                          onClick={() => handleDelete(_id)}
                          className='p-2 bg-red-500 rounder-md'>
                          Delete
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
    </div>
  );
};

export default ManegUser;
