import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Profile from "./Profile/Profile";

function Welcome() {
  return (
    <div>
      <Navbar />
      <Profile/>
      <Footer />
    </div>
  );
}

export default Welcome;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

// const Welcome = () => {
//   const navigate = useNavigate();

//   const handleOptionClick = (path) => {
//     // Perform any additional actions if needed
//     // ...

//     // Navigate to the specified path
//     navigate(path);
//   };

//   return (
//     <div>
//        <Navbar />
//       <select>
//         <option value="" disabled selected>Select an option</option>
//         <option onClick={() => handleOptionClick('/Profile')}> <Profile/> </option>
//         <option onClick={() => handleOptionClick('/Setings')}><Settings/></option>
//       </select>
//       <Footer />
//     </div>
//   );
// };

// export default Welcome;
