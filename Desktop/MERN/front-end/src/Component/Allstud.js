import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
const axios = require('axios').default;
export default function Allstud() {

    const [getstud, setGetstud] = useState([]);
    
    const getdata = async () => {
        const res = await fetch("http://localhost:5000/getstud", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
            console.log("error ");
        } else {
            setGetstud(data)
            console.log("get data");
        }
    }
    useEffect(() => {
        getdata();
    }, []);
    

    //delete student
    const deleteuser = async (id) => {

        const res2 = await fetch(`http://localhost:5000/deletstud/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const deletestud = await res2.json();
        console.log(deletestud);

        if (res2.status === 422 || !deletestud) {
            console.log("error");
        } else {
            getdata();
        }
    }

    return (
        <div className='container mt-5'>
            <div className='mt-3'>
                <Link className='btn btn-success' to="/addstud">Add Student</Link>
            </div>

            <table className="table mt-5 table-bordered   border-dark">
                <thead>
                    <tr className='bg-primary text-white'>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Mobile</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getstud.map((result,id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{id+1}</th>
                                    <td>{result.name}</td>
                                    <td>{result.address}</td>
                                    <td>{result.subject}</td>
                                    <td>{result.mobile}</td>
                                    <td>
                                        <NavLink to={`/viewstud/${result._id}`} className='btn btn-primary me-3'>View</NavLink>
                                        <button className='btn btn-danger me-3' onClick={() => deleteuser(result._id)}>Delete</button>
                                        <NavLink  to={`editstud/${result._id}`} className='btn btn-warning me-3'>Edit</NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
