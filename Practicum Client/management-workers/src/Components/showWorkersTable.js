// // ShowWorkersTable.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// // import EditWorkerForm from './EditWorkerForm';
// import * as FileSaver from 'file-saver';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
// import * as XLSX from 'xlsx';
// import { read, write } from 'xlsx';

// const ShowWorkersTable = () => {
//   const dispatch = useDispatch();
//   const [employees, setEmployees] = useState([]);
//   const [openEditDialog, setOpenEditDialog] = useState(false);
//   const [selectedWorker, setSelectedWorker] = useState(null);
//   const navigate = useNavigate();
//   const [filteredEmployees,setFilteredEmployees]=useState([]);
//   const [formMode, setFormMode] = useState(undefined);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const token = sessionStorage.getItem('token');
    
//     if (!token) {
//       navigate('/login');
//     } else {
//       axios.defaults.headers['Authorization'] = `Bearer ${token}`;
//       fetchData();
//     }
//   }, [navigate]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("https://localhost:7104/api/Employee");
//       dispatch({ type: "SET_EMPLOYEES", payload: response.data });
//       setEmployees(response.data);
//       setFilteredEmployees(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSearch = (event) => {
//     const searchText = event.target.value.toLowerCase();
//     const filteredList = employees.filter((employee) => (
//       (employee.firstName?.toLowerCase().includes(searchText)) ||
//       (employee.lastName?.toLowerCase().includes(searchText)) ||
//       (employee.id?.toString().includes(searchText)) ||
//       (employee.startDate?.toString().includes(searchText))
//     ));
//     setFilteredEmployees(filteredList);
//   };

//   const handleAddEmployee = () => {
//     const employee = {
//       firstName: "",
//       lastName: "",
//       id: "",
//       startDate: "",
//       birthDate: "",
//       gender: "",
//       roles: [],
//     };
//     setFormMode("create");
//     setSelectedWorker(employee);
//     setOpen(true);
//   };

//   const handleExportEmployees = () => {
//     const data = filteredEmployees?.map(employee => ({
//       Name: employee.firstName,
//       LastName: employee.lastName,
//       ID: employee.id,
//       StartDate: employee.dateOfStart
//     }));
//     const ws = XLSX.utils.json_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Employees");
//     const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//     const fileName = "employees.xlsx";
//     const file = new Blob([wbout], { type: 'application/octet-stream' });
//     FileSaver.saveAs(file, fileName);
//   };
//   const handleEditEmployee = (employee) => {
//     setFormMode("edit");
//     setSelectedWorker(employee);
//     setOpen(true);
//   };
//   const handleEdit = (worker) => {
//     setSelectedWorker(worker);
//     setOpenEditDialog(true);
//   };
//   const handleDeleteEmployee = async (employee) => {
//     try {
//       await axios.delete(`https://localhost:7104/api/Employee/${employee.id}`);
//       const updatedEmployees = filteredEmployees.filter((emp) => emp.id !== employee.id);
//       setFilteredEmployees(updatedEmployees);
//     } catch (error) {
//       console.error("Error deleting employee:", error);
//     }
//   };
//   const handleSubmitEmployee = async (employee) => {
//     try {
//       if (formMode === "create")
//         await axios.post("https://localhost:7104/api/Employee", employee);
//       else
//         await axios.put(`https://localhost:7104/api/Employee/${employee.id}`, employee);
//       const updatedEmployees = [...employees];
//       const index = updatedEmployees.findIndex(emp => emp.id === employee.id);
//       if (index !== -1) {
//         updatedEmployees[index] = employee;
//       } else {
//         updatedEmployees.push(employee);
//       }
//       setEmployees(updatedEmployees);
//       setFilteredEmployees(updatedEmployees);
//       setFormMode(undefined);
//       setOpen(false);
//     } catch (error) {
//       console.error("Error saving employee:", error);
//     }
//   };
//   return (
//     <div>
//       <Typography variant="h4" align="center" gutterBottom>Workers List</Typography>
//       <Button style={{ backgroundColor: '#007bff', color: 'white', fontWeight: 'bold', fontFamily: "Arial, Helvetica, sans-serif", textTransform: 'none' }} onClick={handleExportEmployees}>
//               <FontAwesomeIcon icon={faFileExcel} style={{ marginRight: '5px' }} />
//             </Button>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>First Name</TableCell>
//               <TableCell>Last Name</TableCell>
//               <TableCell>TZ</TableCell>
//               <TableCell>Start Work Date</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {employees.map(worker => (
//               <TableRow key={worker.id}>
//                 <TableCell>{worker.firstName}</TableCell>
//                 <TableCell>{worker.lastName}</TableCell>
//                 <TableCell>{worker.tz}</TableCell>
//                 <TableCell>{worker.dateOfStart}</TableCell>
//                 <TableCell>
//                   <Button onClick={() => handleEditEmployee(worker)} variant="contained" color="primary" startIcon={<EditIcon />}>Edit</Button>
//                   <Button onClick={() => handleDeleteEmployee(worker.id)} variant="contained" color="error" startIcon={<DeleteIcon />}>Delete</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       {/* <EditWorkerForm
//         open={openEditDialog}
//         handleClose={() => setOpenEditDialog(false)}
//         handleSave={handleEditSave}
//         worker={selectedWorker}
//       /> */}
//     </div>
//   );
// };

// export default ShowWorkersTable;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { TextField } from '@mui/material';
import AddPost from './addPost';

const ShowWorkersTable = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const token = localStorage.getItem('item');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:7104/api/Employee", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setEmployees(response.data);
        setFilteredEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (!token) {
      navigate('/login');
    } else {
      axios.defaults.headers['Authorization'] = `Bearer ${token}`;
      fetchData();
    }
  }, [navigate, token]);

  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredList = employees.filter((employee) => (
      (employee.firstName?.toLowerCase().includes(searchText)) ||
      (employee.lastName?.toLowerCase().includes(searchText)) ||
      (employee.id?.toString().includes(searchText)) ||
      (employee.dateOfStart?.toString().includes(searchText))
    ));
    setFilteredEmployees(filteredList);
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await axios.delete(`https://localhost:7104/api/Employee/${id}`);
      const updatedEmployees = filteredEmployees.filter((emp) => emp.id !== id);
      setFilteredEmployees(updatedEmployees);
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const handleEdit = (worker) => {
    setSelectedWorker(worker);
    setOpenEditDialog(true);
  };

  const handleAddEmployee = () => {
    setSelectedWorker(null);
    setOpenEditDialog(true);
  };

  const handleExportEmployees = () => {
    const data = filteredEmployees?.map(employee => ({
      Name: employee.firstName,
      LastName: employee.lastName,
      ID: employee.id,
      dateOfStart: employee.dateOfStart
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Employees");
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const fileName = "employees.xlsx";
    const file = new Blob([wbout], { type: 'application/octet-stream' });
    FileSaver.saveAs(file, fileName);
  };

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>Workers List</Typography>
      <TextField
        label="Search"
        variant="outlined"
        onChange={handleSearch}
        style={{ marginBottom: '20px', marginLeft: '10px' }}
      />
      <Button
        style={{ backgroundColor: '#007bff', color: 'white', fontWeight: 'bold', fontFamily: "Arial, Helvetica, sans-serif", textTransform: 'none', marginBottom: '10px' }}
        onClick={handleExportEmployees}
      >
        <FontAwesomeIcon icon={faFileExcel} style={{ marginRight: '5px' }} />
        Export to Excel
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees.map(worker => (
              <TableRow key={worker.id}>
                <TableCell>{worker.firstName}</TableCell>
                <TableCell>{worker.lastName}</TableCell>
                <TableCell>{worker.id}</TableCell>
                <TableCell>{worker.dateOfStart}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={() => handleEdit(worker)}>Edit</Button>
                  <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => handleDeleteEmployee(worker.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddEmployee}>Add Employee</Button>
      </div>
      <AddPost
        open={openEditDialog}
        handleClose={() => setOpenEditDialog(false)}
        handleSave={(newEmployee) => {
          if (selectedWorker) {
            const updatedEmployees = employees.map(emp => (emp.id === selectedWorker.id ? newEmployee : emp));
            setEmployees(updatedEmployees);
          } else {
            setEmployees(prevEmployees => [...prevEmployees, newEmployee]);
          }
          setOpenEditDialog(false);
        }}
        selectedWorker={selectedWorker}
      />
    </div>
  );
};

export default ShowWorkersTable;


