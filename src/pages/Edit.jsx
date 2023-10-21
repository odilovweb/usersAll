import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../redux/usersSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
function Create() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.users);
  const { email, name } = users.filter((f) => f.id == id)[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  return (
    <div className="align-element h-screen flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4 font-bold">Edit user</h2>
          <form
            className="form-control w-full max-w-xs"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/");
              dispatch(
                editUser({
                  name: uname,
                  email: uemail,
                  id: id,
                })
              );
            }}
          >
            <label className="mb-3">
              <span className="label-text mb-2 block">Name: *</span>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
                className="input input-bordered w-full max-w-xs "
                value={uname}
                required
              />
            </label>
            <label className="mb-3">
              <span className="label-text mb-2 block">Email: *</span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Enter email"
                className="input input-bordered w-full max-w-xs "
                value={uemail}
              />
            </label>{" "}
            <div className="card-actions w-full">
              <button className="btn btn-primary w-full">Edit</button>
              <Link className="btn btn-secondary" to="/">
                Back home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
