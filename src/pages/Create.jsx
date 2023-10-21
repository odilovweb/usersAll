import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newUser } from "../redux/usersSlice";
import { Link, useNavigate } from "react-router-dom";
function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="align-element h-screen flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4 font-bold">Create New User</h2>
          <form
            className="form-control w-full max-w-xs"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/");
              dispatch(
                newUser({
                  name,
                  email,
                  id: users.length + 1,
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
                required
              />
            </label>
            <label className="mb-3">
              <span className="label-text mb-2 block">Email: *</span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                className="input input-bordered w-full max-w-xs "
                required
              />
            </label>{" "}
            <div className="card-actions w-full">
              <button className="btn btn-primary w-full">Create</button>
              <Link to="/" className="btn btn-secondary">
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
