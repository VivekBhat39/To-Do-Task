import React, { useEffect, useState } from 'react'

export default function Home() {
    const [employee, setEmployee] = useState({});
    let [userExists, setUserExists] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('employee') === null)
            setUserExists(false);
        else {
            setEmployee(JSON.parse(localStorage.getItem('employee')));
            setUserExists(true);
        }
    }, []);

    function clear(e) {
        localStorage.clear();
        setUserExists(false);
    }

    return (
        <div className='mt-4'>
            {
                userExists ?
                    <div>
                        <h1>{employee.firstName} {employee.lastName}</h1>
                    </div> : null
            }


            <h1 className='mt-3'>Welcome</h1>
            <button className='btn btn-primary mt-4' onClick={(e) => clear(e)}>Clear</button>
        </div>
    )
}
