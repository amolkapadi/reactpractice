import React ,{useState,useEffect}from 'react'
import { Link ,useParams} from 'react-router-dom'

export default function Viewstud() {

    const [getstud, setGetstud] = useState([]);

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
            setGetstud(data)
            console.log("get data");
        }
    }
    useEffect(() => {
        getdata();
    },[]);


    return (
        <div className='container mt-5'>
        <Link className='btn btn-primary ' to="/">Home</Link>
            <div className='row mt-5'>
                <div className='col-md-6'>
                    <ul className="list-group">
                        <li className="list-group-item active" aria-current="true">Student Details</li>
                        <li className="list-group-item">Student Name :- {getstud.name}</li>
                        <li className="list-group-item">Student Address :- {getstud.address}</li>
                        <li className="list-group-item">Student Subject :- {getstud.subject}</li>
                        <li className="list-group-item">Student Mobile :- {getstud.mobile}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
