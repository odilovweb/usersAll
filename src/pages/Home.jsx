import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/usersSlice";
function Home() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(
      deleteUser({
        id,
      })
    );
  };

  return (
    <div className="overflow-x-auto align-element">
      <h2 className="text-center text-2xl font-bold py-4">All users list: </h2>
      <table className="table">
        <thead>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <th className="text-2xl">{user.id}</th>
                <td className="text-2xl">{user.name}</td>
                <td className="text-xl italic">{user.email}</td>
                <td className="flex gap-3">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(user.id);
                    }}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                  <Link to={`/edit/${user.id}`} className="btn btn-warning">
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Home;
