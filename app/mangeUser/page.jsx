import React from "react";
import { userData } from "../api/userData";

const ManegUser = async () => {
  const users = await userData();
  return <div>ManegUser{users.length}</div>;
};

export default ManegUser;
