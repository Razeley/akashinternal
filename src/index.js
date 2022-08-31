import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contacts from './components/staffContacts/Contacts';
import AdminStaff from './components/staffContacts/AdminStaff';
import StaffTable from './components/staffContacts/Staff';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn/SignIn';
import InspectionTable from './pages/Inspections/InspectionTable';
import WarrantyTable from './pages/WarrantyTable/WarrantyTable';
import House from './pages/HouseInfo/House'
import CrudTables from './pages/AdminTemp4/CrudTables';
import HouseIndex from './components/IndexHouses.js/IndexHouses.js/HouseIndex';
import HouseSales from './pages/HouseSales/HouseSales';
import ChangePassword from './pages/Account/ChangePassword';
import CustomerTable from './components/customer/CustomerTable';
import RealtorTable from './components/realtor/RealtorTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={ <SignIn/> } />
        <Route path='dashboard' element= { <Dashboard /> } >
      <Route path="InspectionTable" element={ <InspectionTable /> } />   
        <Route path="WarrantyTable" element={ <WarrantyTable /> } /> 
        <Route path="House" element={ <House /> } /> 
        <Route path="RealtorTable" element={ <RealtorTable /> } /> 
        <Route path="Contacts" element={ <Contacts /> } />
        <Route path="AdminStaff" element={ <AdminStaff /> } />
        <Route path="CustomerTable" element={ <CustomerTable /> } /> 
        <Route path="HouseIndex" element={ <HouseIndex /> } /> 
        <Route path="HouseSales" element={ <HouseSales /> } />
        <Route path="StaffTable" element={ <StaffTable /> } />
        <Route path="ChangePassword" element={ <ChangePassword /> } /> 
      </Route>
    </Routes> 
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
