// // import { useForm } from "react-hook-form";
// // import { yupResolver } from '@hookform/resolvers/yup';
// // import * as yup from "yup";
// // import axios from "axios";

// // const schema = yup.object({
// //     title: yup.string().required(),
// //     body: yup.string().required(),
// // }).required();

// // export default function App({ userId, addPost, post }) {
// //     const { register, handleSubmit, formState: { errors } } = useForm({
// //         resolver: yupResolver(schema),
// //         values: post
// //     });
// //     const onSubmit = (data) => {
// //         console.log(data);
// //         if (post) {
// //             axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data)
// //                 .then(x => {
// //                     console.log(x.data)
// //                     addPost(x.data)
// //                 })
// //                 .catch(err => console.log(err))
// //         }
// //         else {

// //             data.userId = userId;
// //             axios.post("https://jsonplaceholder.typicode.com/posts", data)
// //                 .then(x => {
// //                     console.log(x.data)
// //                     addPost(x.data)

// //                 })
// //                 .catch(err => console.log(err))
// //         }

// //     }

// //     return (
// //         <form onSubmit={handleSubmit(onSubmit)}>
// //             <label>כותרת</label>
// //             <input {...register("title")} />
// //             <p>{errors.title?.message}</p>
// //             <label>תוכן</label>
// //             <input {...register("body")} />
// //             <p>{errors.body?.message}</p>

// //             <input type="submit" value={post ? "עדכן" : "הוסף"} />
// //         </form>
// //     );
// // }
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';

// const AddPost = ({ open, handleClose }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     tz: '',
//     dateOfStart: ''
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     // אם יש תנאי שלא להכניס אותו תפקיד פעמיים, אפשר לבדוק את זה כאן

//     axios.post("https://localhost:7104/api/Employee", formData)
//       .then((response) => {
//         console.log("Employee added successfully:", response.data);
//         handleClose();
//       })
//       .catch((error) => {
//         console.error("Error adding employee: ", error);
//         setError('Error adding employee. Please try again.');
//       });
//   };

//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>Add New Employee</DialogTitle>
//       <DialogContent>
//         <DialogContentText>Please fill in the details of the new employee:</DialogContentText>
//         <TextField
//           autoFocus
//           margin="dense"
//           label="First Name"
//           type="text"
//           name="firstName"
//           fullWidth
//           value={formData.firstName}
//           onChange={handleChange}
//         />
//         <TextField
//           margin="dense"
//           label="Last Name"
//           type="text"
//           name="lastName"
//           fullWidth
//           value={formData.lastName}
//           onChange={handleChange}
//         />
//         <TextField
//           margin="dense"
//           label="ID"
//           type="text"
//           name="tz"
//           fullWidth
//           value={formData.tz}
//           onChange={handleChange}
//         />
//         <TextField
//           margin="dense"
//           label="Start Work Date"
//           type="date"
//           name="dateOfStart"
//           fullWidth
//           value={formData.dateOfStart}
//           onChange={handleChange}
//         />
//         {error && <DialogContentText color="error">{error}</DialogContentText>}
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Cancel</Button>
//         <Button onClick={handleSubmit}>Add Employee</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AddPost;


//נסיון שני
// import React, { useState } from 'react';
// import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

// const AddPost = ({ open, handleClose, handleSave }) => {
//   const [employee, setEmployee] = useState({
//     firstName: '',
//     lastName: '',
//     id: '',
//     dateOfStart: '',
//     ateOfBirth: '',
//     gender: '',
//     roles: [],
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setEmployee(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = () => {
//     handleSave(employee);
//     setEmployee({
//       firstName: '',
//       lastName: '',
//       id: '',
//       dateOfStart: '',
//       dateOfBirth: '',
//       gender: '',
//       roles: [],
//     });
//   };

//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>Add New Employee</DialogTitle>
//       <DialogContent>
//         <TextField
//           autoFocus
//           margin="dense"
//           name="firstName"
//           label="First Name"
//           type="text"
//           fullWidth
//           value={employee.firstName}
//           onChange={handleChange}
//         />
//         <TextField
//           margin="dense"
//           name="lastName"
//           label="Last Name"
//           type="text"
//           fullWidth
//           value={employee.lastName}
//           onChange={handleChange}
//         />
//         <TextField
//           margin="dense"
//           name="id"
//           label="ID"
//           type="text"
//           fullWidth
//           value={employee.id}
//           onChange={handleChange}
//         />
//         <TextField
//           margin="dense"
//           name="dateOfStart"
//           label="Start Date"
//           type="date"
//           fullWidth
//           InputLabelProps={{
//             shrink: true,
//           }}
//           value={employee.dateOfStart}
//           onChange={handleChange}
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose} color="primary">
//           Cancel
//         </Button>
//         <Button onClick={handleSubmit} color="primary">
//           Save
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AddPost;
import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';

const AddPost = ({ open, handleClose, handleSave, selectedWorker }) => {
  const [employee, setEmployee] = useState({
    TZ: '',
    firstName: '',
    lastName: '',
    password: '',
    status: 0,
    gender: 0,
    dateOfStart: '',
    dateOfBirth: '',
    roles: [],
  });
  const [newRole, setNewRole] = useState('');
  const [newRoleStartDate, setNewRoleStartDate] = useState('');

  useEffect(() => {
    if (selectedWorker) {
      setEmployee(selectedWorker);
    } else {
      setEmployee({
        TZ: '',
        firstName: '',
        lastName: '',
        password: '',
        status: 0,
        gender: 0,
        dateOfStart: '',
        dateOfBirth: '',
        roles: [],
      });
    }
  }, [selectedWorker]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRoleChange = (event) => {
    setNewRole(event.target.value);
  };

  const handleRoleStartDateChange = (event) => {
    setNewRoleStartDate(event.target.value);
  };

  const handleAddRole = () => {
    if (newRole && newRoleStartDate && !employee.roles.find(role => role.idRole === newRole)) {
      setEmployee(prevState => ({
        ...prevState,
        roles: [...prevState.roles, { idRole: newRole, dateOfStart: newRoleStartDate }]
      }));
      setNewRole('');
      setNewRoleStartDate('');
    }
  };

  const handleSubmit = () => {
    if (selectedWorker) {
      // Update existing worker
      console.log('updated employee')
      console.log(employee)
      axios.put(`https://localhost:7104/api/Employee/${selectedWorker.id}`, employee)
        .then(() => {
          window.location.reload()
          handleSave(employee);
          handleClose();
        })
        .catch(error => console.error("Error updating employee:", error));
    } else {
      // Add new worker
      console.log('added employee')
      console.log(employee)
      axios.post("https://localhost:7104/api/Employee", employee)
        .then(response => {
          window.location.reload()
          handleSave(response.data);
          handleClose();
        })
        .catch(error => console.error("Error adding employee:", error));
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{selectedWorker ? 'Edit Worker' : 'Add New Worker'}</DialogTitle>
      <DialogContent>
        <TextField
          required
          autoFocus
          margin="dense"
          name="TZ"
          label="ID"
          type="text"
          fullWidth
          value={employee.tz}
          onChange={handleChange}
          error={!employee.tz || !/^\d{9}$/.test(employee.tz)}
          helperText={!employee.tz || !/^\d{9}$/.test(employee.tz) ? 'ID must be a 9-digit number' : ''}
        />
        <TextField
          required
          margin="dense"
          name="firstName"
          label="First Name"
          type="text"
          fullWidth
          value={employee.firstName}
          onChange={handleChange}
          error={!employee.firstName}
          helperText={!employee.firstName ? 'First name is a mandatory field' : ''}
        />
        <TextField
          required
          margin="dense"
          name="lastName"
          label="Last Name"
          type="text"
          fullWidth
          value={employee.lastName}
          onChange={handleChange}
          error={!employee.lastName}
          helperText={!employee.lastName ? 'Last name is a mandatory field' : ''}
        />
        <TextField
          required
          margin="dense"
          name="password"
          label="Password"
          type="password"
          fullWidth
          value={employee.password}
          onChange={handleChange}
          error={!employee.password}
          helperText={!employee.password ? 'Password is a mandatory field' : ''}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status"
            value={employee.status}
            onChange={handleChange}
            name="status"
          >
            <MenuItem value={0}>Inactive</MenuItem>
            <MenuItem value={1}>Active</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            id="gender"
            value={employee.gender}
            onChange={handleChange}
            name="gender"
          >
            <MenuItem value={0}>Female</MenuItem>
            <MenuItem value={1}>Male</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          name="dateOfStart"
          label="Start Date"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={employee.dateOfStart}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="dateOfBirth"
          label="Date of Birth"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={employee.dateOfBirth}
          onChange={handleChange}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            value={newRole}
            onChange={handleRoleChange}
            name="role"
          >
            <MenuItem value={1}>Teacher</MenuItem>
            <MenuItem value={2}>Nurse</MenuItem>
            <MenuItem value={3}>Secretary</MenuItem>
            <MenuItem value={4}>Programmer</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          name="newRoleStartDate"
          label="Role Start Date"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={newRoleStartDate}
          onChange={handleRoleStartDateChange}
        />
        <Button onClick={handleAddRole} color="primary" variant="contained">Add Role</Button>
        {employee.roles.map((role, index) => (
          <div key={index}>
            <div>Role: {role.idRole}</div>
            <div>Start Date: {role.dateOfStart}</div>
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
  
};

export default AddPost;





