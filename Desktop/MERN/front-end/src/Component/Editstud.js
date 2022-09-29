import React, { useState, useEffect } from 'react'
import { Link, useParams ,useNavigate} from 'react-router-dom'


export default function Editstud() {
    // const [getstud, setGetstud] = useState([]);
    const history = useNavigate();

    const [inputval, setInputval] = useState({
        name: "",
        address: "",
        subject: "",
        mobile: ""
    })

    const setData = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;
        setInputval((preval) => {
            return {
                ...preval, [name]: value
            }
        })
    }


    const { id } = useParams("");
    console.log(id);

    const getdata = async () => {
        const res = await fetch(`http://localhost:5000/getstud/${id}`, {
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
            setInputval(data)
            console.log("get data");
        }
    }
    useEffect(() => {
        getdata();
    }, []);

    const updatestud = async (e) => {
        e.preventDefault();
        const { name, address, subject, mobile } = inputval;
        const res2 = await fetch(`http://localhost:5000/updatestud/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, address, subject, mobile
            })
        });
        const data2 = await res2.json();
        if (res2.status === 422 || !data2) {
            alert("fill the data");
        } else {
            history("/")
            setInputval(data2);
        }}
    return (
        <div className='container mt-5'>
            <form className='mx-auto w-50 shadow p-5'>
                <Link className="btn btn-primary" to="/">Home</Link>
                <h3 className='mt-5'>Edit Details</h3>

                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        name="name" onChange={setData} value={inputval.name}
                        aria-describedby="emailHelp" />

                </div>

                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Student Address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        name="address" onChange={setData} value={inputval.address}
                        aria-describedby="emailHelp" />
                </div>

                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Student Subject</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        name='subject' onChange={setData} value={inputval.subject}
                        aria-describedby="emailHelp" />
                </div>

                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Student Mobile</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        name='mobile' onChange={setData} value={inputval.mobile}
                        aria-describedby="emailHelp" />
                </div>

                <button className='btn btn-primary' onClick={updatestud} >Update</button>
            </form>
        </div>
    )
}
