import React, { useState } from 'react'

export default function Task() {

    let [mode, setMode] = useState("new");
    const [data, setData] = useState({
        id: 1,
        date: "",
        time: "",
        work: ""
    })

    const [tasks, setTasks] = useState([]);

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    function saveWork() {
        let mytasks = tasks;
        if (mode === "new")
            mytasks.push(data);
        else {
            mytasks = mytasks.map((task) => {
                if (task.id === data.id) {
                    task.date = data.date;
                    task.time = data.time;
                    task.work = data.work;
                }
                return task;
            })
        }
        setTasks(mytasks);
        console.log(mytasks);
        setData({
            id: mytasks[mytasks.length - 1].id + 1,
            date: "",
            time: "",
            work: ""
        });
        setMode("new");
    }

    function deleteData(task) {
        if (window.confirm("Sure to delete?")) {
            let mytasks = tasks;
            let newtasks = [];
            for (let i = 0; i < mytasks.length; i++) {
                if (task.id !== mytasks[i].id)
                    newtasks.push(mytasks[i]);
            }
            setTasks(newtasks);

        }
    }

    // useEffect(() => {
    //     setTask.push(data)
    // },[data])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-4 mt-5">
                    <h4>TO-DO TASK</h4>
                    <div className="card rounded-5" style={{ width: "100%" }}>
                    <div class="card-body">
                        <div className="form-outline flex-fill mb-0 mt-2">
                            <label className="form-label fw-bold">Date<span className='text-danger'></span></label>
                            <input type="date" name="date" value={data.date} onChange={(e) => handleChange(e)} className="form-control" />
                        </div>

                        <div className="form-outline flex-fill mb-0 mt-2">
                            <label className="form-label fw-bold">Time<span className='text-danger'></span></label>
                            <input type="time" name="time" value={data.time} onChange={(e) => handleChange(e)} className="form-control" />
                        </div>

                        <div className="form-outline flex-fill mb-0 mt-2">
                            <label className="form-label fw-bold">Work<span className='text-danger'></span></label>
                            <textarea name="work" value={data.work} onChange={(e) => handleChange(e)} cols="40" rows="5"></textarea>
                        </div>

                        <div className="mt-3">
                            <button onClick={(e) => { saveWork(e) }} className='btn btn-success'>Save</button>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 mt-5"></div>
                <div className="col-lg-6  w-50">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>#</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Task</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                tasks.map((task, i) => {
                                    return (<tr key={i}>
                                        <td>
                                            <button className='btn btn-primary' onClick={(e) => { setMode("edit"); setData(task); }}><i class="fa-sharp fa-solid fa-pen"></i></button>
                                            <button className='btn btn-danger ms-2' onClick={(e) => { deleteData(task); }}><i class="fa-sharp fa-solid fa-trash"></i></button>

                                        </td>
                                        <td>{i + 1}</td>
                                        <td>{task.date}</td>
                                        <td>{task.time}</td>
                                        <td>{task.work}</td>

                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
