import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  return (
    <header className=" bg-purple-300 z-10 top-0 sticky">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-stretch justify-between h-16">
          <div className="flex md:flex md:items-center">
            <Link className="block text-gray-700 no-underline font-sans" to={"/"}>
              <span className="sr-only">Home</span>
              <h1 className="text-3xl font-sans">DevSearch</h1>
            </Link>
          </div>

          <div className={"flex items-center md:gap-8 "}>
            <div className="flex items-center gap-2">
              <div className="sm:gap-4 sm:flex">
                <a href="/login" className="px-5 py-2.5 text-md font-large text-gray-700 cursor-pointer">
                  {/* {user == null ? "Login" : "Logout"} */} Login
                </a>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

// import {Link} from 'react-router-dom';

// export default function Header({
//     heading,
//     paragraph,
//     linkName,
//     linkUrl="#"
// }){
//     return(
//         <div className="mb-10">
//             <div className="flex justify-center">
//                 <img
//                     alt=""
//                     className="h-14 w-14"
//                     src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"/>
//             </div>
//             <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//                 {heading}
//             </h2>
//             <p className="mt-2 text-center text-sm text-gray-600 mt-5">
//             {paragraph} {' '}
//             <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
//                 {linkName}
//             </Link>
//             </p>
//         </div>
//     )
// }
