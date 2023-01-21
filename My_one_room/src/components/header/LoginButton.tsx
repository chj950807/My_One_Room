import React from "react";
import { GrLogin } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../logIn/UserData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogOutSuccess } from "../../redux/user";
export default function LoginButton() {
  const navigiate = useNavigate();
  const dispatch = useDispatch();
  const onLogOut = async() => {
    await auth.signOut();
    localStorage.clear();
    dispatch(LogOutSuccess({email:"" ,displayName:""}));
    navigiate("/");
  };

  if (auth.currentUser === null) {
    return (
      <div>
        <Link to={"/login"}>
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar bg-gray-300 border border-sky-400"
          >
            <div className="w-7 rounded-full text-2xl text-black">
              {auth.currentUser == null ? <GrLogin /> : <FaUserAlt />}
            </div>
          </label>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar bg-gray-300 border border-sky-400"
        >
          <div className="w-7 rounded-full text-2xl text-black">
            {auth.currentUser == null ? <GrLogin /> : <FaUserAlt />}
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to={'/profile'}>
            <div className="justify-between">Profile</div>
            </Link>
          </li>
          <li>
            <div onClick={onLogOut}> Logout</div>
          </li>
        </ul>
      </div>
    );
  }
}
