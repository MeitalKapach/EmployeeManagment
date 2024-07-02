// import React, { useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import axios from 'axios'; // ייבוא של axios
// import ShowWorkersTable from './Components/showWorkersTable';
// import Login from './Components/login';

// function App() {
//   const token = localStorage.getItem("item");
  
//   useEffect(() => {
//     if (token) {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     } else {
//       delete axios.defaults.headers.common['Authorization'];
//     }
//   }, [token]);

//   return (
//     <BrowserRouter>
//       <Routes>
//         {token ? (
//            <Route path="/" element={<ShowWorkersTable />} />
//           //console.log('there is teken');
//         ) : (
//           <Route path="/login" element={<Login />} />
//         )}
//         <Route path="/showWorkersTable" element={<ShowWorkersTable />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios'; // ייבוא של axios
import ShowWorkersTable from './Components/showWorkersTable';
import Login from './Components/login';

function App() {
  var token = localStorage.getItem("item");
  
  // אם יש טוקן ב-localStorage והוא תקין, נקבע את ה-headers של Axios
  if (token) {
    const expirationDate = localStorage.getItem("expirationDate");
    if (!expirationDate || new Date(expirationDate) < new Date()) {
      token = null; // אם הטוקן פג תוקפו, אפס את הטוקן ונבדוק מחדש בהתחברות
    } else {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* ניתוב ראשי: תמיד לדף ההתחברות אם אין טוקן או הטוקן פג תוקפו */}
        {!token || new Date(localStorage.getItem("expirationDate")) < new Date() ? (
          <Route path="/" element={<Navigate to="/login" />} />
        ) : (
          // דף הטבלה לאחר התחברות
          <Route path="/" element={<ShowWorkersTable />} />
        )}

        {/* דף ההתחברות */}
        <Route path="/login" element={<Login />} />
        <Route path="/showWorkersTable" element={<ShowWorkersTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
