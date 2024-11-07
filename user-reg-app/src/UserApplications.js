import React, { useState, useEffect } from 'react';
import DemoDataService from './DemoDataService';
import { Link } from "react-router-dom";

const UserApplications = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);  
  const [requests, setRequests] = useState([]);

  useEffect(() => {    
    const dataService = new DemoDataService();  
    setRequests(dataService.getRequests());
  }, [])

  const getStatusStyle = (value) => {
    if (value === 'New') {
      return 'badge bg-success';
    } else if (value === 'Processed') {
      return 'badge bg-primary';
    } else if (value === 'Rejected') {
      return 'badge bg-danger';
    } else {
      return 'badge bg-warning';
    }
  }

  return (
    <div className=''>
      <h4 className="shadow py-2 bg-warning text-dark text-center rounded">User Applications</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">Status</th>
            <th scope="col">Request Date/Time</th>
          </tr>
        </thead>
        <tbody>
          { requests.map((request, i) => {
            return (
              <tr className="align-baseline" key={i}>
                <th scope="row">{request.id}</th>
                <td className="text-primary">{request.name}</td>
                <td><span className={getStatusStyle(request.status)}>{request.status}</span></td>
                <td><span style={{ "fontSize": "0.9em" }}> {request.requestDate}</span></td>
                <td className='text-center'>
                  <Link to="/app-received">Review</Link>
                  {/* <Link to="/examples/block-example">Block Example</Link> will need to press enter */}
                  {/* <a href="/examples/block-example">Review</a> */}
                  {/* <button type="button" className="d-inline-flex align-baseline justify-content-center btn btn-outline-primary py-0" style={{ "fontSize": "0.8em" }} data-bs-toggle="modal" data-bs-target="#newsEditModal" onClick={() => setSelectedIndex(i)}>Review</button> */}
                </td>
              </tr>
            )
          })
          }        
        </tbody>
      </table>
    </div>
  );
};

export default UserApplications;