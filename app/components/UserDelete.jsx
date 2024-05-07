"use client";
import React from "react";

const UserDelete = () => {
  // const [users, setUser] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:7000/users")
  //     .then((res) => res.json())
  //     .then((data) => setUser(data));
  // }, []);
//   console.log(users);
  // delete product

  const handleDelete = (_id) => {
    console.log("dlt", _id);

    fetch(`http://localhost:7000/users/${_id}`, {
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
    <button
      className='btn btn-outline btn-error'
      onClick={() => handleDelete(_id)}>
      Delete
    </button>
  );
};

export default UserDelete;
