import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Category from "./Category";
import Language from "./Language";
import Bookmark from "./Bookmark";
import SignUp from "./SignUp";
import Login from "./Login";
import Weather from "./Weather";
import Feedback from "./form";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import Logout from "./Logout";
import ForgotPassword from "./ForgotPassword";
import RegisterAndLogin from "./RegisterandLogin";
import Query from "./Query";
import Custom from "./Custom";
const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (

    <>
      <Router>
      
        {isLoggedIn ? (
          <>
          <Header />
          {/* <a href="/weather">
      <img
        id="weather_img"
        src="public\weather_gif.gif"
        className=" rounded-[30px] bg-gray-200 w-fit p-2  h-[100px] sticky fixed bottom-0 left-0 mb-0"
      />
    </a>

    <a href="/news/articles">
      <img
        src="public\diary.gif"
        className="rounded-[30px] bg-gray-200 w-fit p-2  h-[90px] sticky fixed bottom-0 right-0 ml-auto "
      />
    </a> */}
    <a href="/weather" className="fixed top-50 left-0 mt-12 ml-5 z-50">
          <img
            id="weather_img"
            src="public\weather_gif.gif"
            className="rounded-[30px] bg-gray-200 w-[100px] p-2 h-[100px]"
          />
        </a>
        <a href="/news/articles" className="fixed top-50 right-0 mt-20 mr-5 z-50">
          <img
            src="public\diary.gif"
            className="rounded-[30px] bg-gray-200 w-[100px] p-2 h-[100px]"
          />
        </a>
            <Routes>
              {/* <Route path="*" element={<><Logout /></>} /> */}
              <Route path="/" element={<RegisterAndLogin />} />
              <Route path="/reset" element={<ForgotPassword />} />
              <Route path="/" element={<Logout />} />
              <Route
                path="/general"
                element={
                  <Category category="general" img="/image-not-found-1-scaled.png" />
                }
              />
              <Route path="/business" element={<Category category="business" />} />
              <Route
                path="/entertainment"
                element={<Category category="entertainment" />}
              />
              <Route path="/health" element={<Category category="health" />} />
              <Route path="/science" element={<Category category="science" />} />
              <Route path="/sports" element={<Category category="sports" />} />
              <Route
                path="/technology"
                element={<Category category="technology" />}
              />
              <Route path="/advancedsearch" element={<Custom/>}/>
              <Route path="/language/us" element={<Language category="us" />} />
              <Route path="/language/in" element={<Language category="in" />} />
              <Route path="/language/sa" element={<Language category="sa" />} />
              <Route path="/language/ca" element={<Language category="ca" />} />
              <Route path="/language/au" element={<Language category="au" />} />
              <Route path="/language/nz" element={<Language category="nz" />} />

              <Route path="/language/cn" element={<Language category="cn" />} />
              <Route path="/language/jp" element={<Language category="jp" />} />
              <Route path="/language/ru" element={<Language category="ru" />} />
              <Route path="/language/si" element={<Language category="si" />} />
              <Route path="/language/ch" element={<Language category="ch" />} />
              <Route path="/language/it" element={<Language category="it" />} />
              <Route path="/language/th" element={<Language category="th" />} />

              <Route path="/news/articles" element={<Bookmark />} />
              <Route path="/query" element={<Query />} />
              <Route path="/news/form" element={<Feedback />} />
              <Route path="/weather" element={<Weather />} />
            </Routes>
            <Footer />
            
          </>

        ) : (
          <Routes>
          {/* <Route path="*" element={<><Logout /></>} /> */}
              <Route path="/" element={<RegisterAndLogin />} />
              <Route path="/reset" element={<ForgotPassword />} />
              <Route path="/" element={<Logout />} />
          </Routes>
        )
        }


      </Router>
      
    </>
  );
};


export default App;


// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";
// import Category from "./Category";
// import Language from "./Language";
// import Bookmark from "./Bookmark";
// import SignUp from "./SignUp";
// import Login from "./Login";
// import Weather from "./Weather";
// import Feedback from "./form";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from './firebase';
// import Logout from "./Logout";
// import ForgotPassword from "./ForgotPassword";
// import RegisterAndLogin from "./RegisterandLogin";
// import "./App.css"
// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setIsLoggedIn(true);
//       } else {
//         setIsLoggedIn(false);
//       }
//     });

//     // Clean up subscription to avoid memory leaks
//     return () => unsubscribe();
//   }, []);

//   return (
//     <>
//       <Router>
//         {isLoggedIn ? (
//           <>
//             <Header />
//             <Routes>
//               {/* Routes for logged-in users */}
//               <Route path="*" element={<><Logout /></>} />              
//               <Route path="/" element={<RegisterAndLogin />} />
//               <Route path="/reset" element={<ForgotPassword />} />
//               <Route path="/" element={<Logout />} />
//               <Route path="/general" element={<Category category="general" img="/image-not-found-1-scaled.png" />} />
//               <Route path="/business" element={<Category category="business" />} />
//               <Route path="/entertainment" element={<Category category="entertainment" />} />
//               <Route path="/health" element={<Category category="health" />} />
//               <Route path="/science" element={<Category category="science" />} />
//               <Route path="/sports" element={<Category category="sports" />} />
//               <Route path="/technology" element={<Category category="technology" />} />
//               <Route path="/language/us" element={<Language category="us" />} />
//               <Route path="/language/in" element={<Language category="in" />} />
//               <Route path="/language/sa" element={<Language category="sa" />} />
//               <Route path="/language/ca" element={<Language category="ca" />} />
//               <Route path="/language/au" element={<Language category="au" />} />
//               <Route path="/language/nz" element={<Language category="nz" />} />
//               <Route path="/language/cn" element={<Language category="cn" />} />
//               <Route path="/language/jp" element={<Language category="jp" />} />
//               <Route path="/language/ru" element={<Language category="ru" />} />
//               <Route path="/language/si" element={<Language category="si" />} />
//               <Route path="/language/ch" element={<Language category="ch" />} />
//               <Route path="/language/it" element={<Language category="it" />} />
//               <Route path="/language/th" element={<Language category="th" />} />
//               <Route path="/news/articles" element={<Bookmark />} />
//               <Route path="/news/form" element={<Feedback />} />
//               <Route path="/weather" element={<Weather />} />

//               <Route path="*" element={<Logout />} />
//             </Routes>
//             <a href="/weather">
//               <img
//                 id="weather_img"
//                 src="https://imgs.search.brave.com/rB1g9VdXYyb9rxxtgs3runJcev1UgxNY2N5nXL9Go-4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8yNjY0LzI2NjQ1/NjkucG5nP3NlbXQ9/YWlzX2h5YnJpZA"
//                 className=" rounded-[30px] bg-gray-200 w-fit p-2 animate-bounce h-[100px] sticky bottom-0 left-0 mb-0"
//               />
//             </a>
//             <a href="/news/articles">
//               <img
//                 src="https://imgs.search.brave.com/HHOhBQ7zYrJ1ZM8vGy5djB14CnR1L-s36Q2eZOHXh24/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMjQ2MS8xMjQ2/MTQwOC5wbmc_c2Vt/dD1haXNfaHlicmlk"
//                 className="rounded-[30px] bg-gray-200 w-fit p-2  h-[90px] sticky bottom-0 right-0 ml-auto "
//               />
//             </a>
//             <Footer />
//           </>
//         ) : (
//           <Routes>
//             {/* Routes for not logged-in users */}
//             <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//             <Route path="/reset" element={<ForgotPassword />} />
//           </Routes>
//         )}
//       </Router>


//     </>
//   );
// };

// export default App;
