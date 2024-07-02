// import { observable, action, makeObservable, runInAction } from 'mobx';
// import axios from "axios";

// class WorkerSingleTon {

//     workersList = [];

//     constructor() {
//         makeObservable(this, {
//             workersList: observable,
//             getWorkersList: action,
//             putWorker: action,
//             deleteWorker: action
//         })
//         this.init();
//     }

//     init() {
//         this.getWorkersList();
//         if (this.workersList == null)
//             console.log("data is null");
//         else
//             console.log("data is not null");
//         this.workersList.map((i) => {
//             console.log(i.FirstName);
//         })
//     }

//     async getWorkersList() {
//         try {
//             const response = await axios.get(`https://localhost:7104/api/Employee`);
//             runInAction(() => {
//                 this.workersList = response.data;
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     }


//     async getWorker(id) {
//         try {
//             const response = await axios.get(`https://localhost:7104/api/Employee/${id}`);
//             runInAction(() => {
//                 this.workerById = response.data;
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     async postWorker(appointmet) {
//         try {
//             const res = await fetch("http://localhost:7104/Employee", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(appointmet)
//             });
//             if (res.status === 200) {
//                 runInAction(() => {
//                     this.data.push(appointmet);
//                     alert("Your appointment was kept successfully");
//                 });
//             } else {
//                 console.error("Meeting was not added. Unexpected status:", res.status);
//             }
//             return res.status;
//         } catch (error) {
//             console.error("Error adding meeting:", error);
//             throw error;
//         }
//     }

//     async putWorker(id, updatedWorker) {
//         try {
//             const response = await axios.put(`https://localhost:7104/api/Employee/${id}`, updatedWorker, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
//             if (!response.ok) {
//                 const errorMessage = await response.json();
//                 throw new Error(errorMessage.message);
//             }
//             console.log('Worker updated successfully.');
//             const updatedWorkerIndex = this.workersList.findIndex(worker => worker.id === id);
//             if (updatedWorkerIndex !== -1) {
//                 this.workersList[updatedWorkerIndex] = updatedWorker;
//             } else {
//                 console.error('Worker not found in workersList');
//             }
//         } catch (error) {
//             console.error('Error updating worker:', error);
//             throw error;
//         }
//     }
    
//     deleteWorker(id) {
//         const index = this.workersList.findIndex(worker => worker.id === id);
//         try {
//             const response = axios.delete(`https://localhost:7104/api/Employee/${id}`);
//            console.log("isActive = false");
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// export default new WorkerSingleTon();