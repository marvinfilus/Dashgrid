import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import { useSession } from '../firebase/UserProvider';
import { useState } from 'react';
import { useForm } from "react-hook-form";

function Main () {
    const { register, handleSubmit } = useForm();
    const {user} = useSession();
    const [taskId, setTaskId] = useState(0)
    const [task , setTask] = useState([
        {
            todo:"Clean room",
            progress: "To Do",
            id:0
        }
    ])
    const newTask = useRef();
    const delButton = useRef(); 


    const addTask = (data) =>{
        const addedTask = newTask.current.value; 
        console.log(addedTask, task.length)
        if(task.length === 0){
            let obj = {
                todo : addedTask,
                progress: "To Do",
                id:0
            }
            setTask( task =>[...task, obj ]);
        }
        else{
            console.log("length is " + task.length)
            let obj = {
                todo : addedTask,
                progress: "To Do",
                id: taskId + 1
            }
            setTask( task =>[...task, obj ]);
            setTaskId(taskId => 1 + taskId  )
            console.log(task , taskId);
        }


        if (task.includes(addedTask)){
            console.log( 'sorry, try again')
        } else{
            
        }
    }

    const statusButton = (index) =>{
       let status = task[index].progress;
       switch(status){
        case "To Do":
            status = 'In Progress'
            break;
        case "In Progress":
            status = "Finished"
            break;
        case "Finished":
           status = "To Do"
            break;
       }
        console.log(index)
        setTask(task.map( task => {
            console.log(task)
            if( task.id === index) {
                console.log(task.id)
                return {...task, progress: status}
                
            } else {
                console.log("We aint make it " + task.id)
                return task
            }
        }))
    }

    const deleteButton = (e) => {
        const word = e.target.value
        const index = task.indexOf(task[word]);
        console.log(index)
        if (index > -1) { 
            task.splice(index, 1); 
            console.log(task)
            setTask( task => [...task])
        } else { 
            console.log('Not run');
        }
    }

    const button = () => {
        console.log(task)
    }

    return(
        <div className='main-div'>
            <section className="vh-100 todo-sect" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center container align-items-center h-100">
                    <div className="col col-lg-9 col-xl-7 container">
                        <div className="card rounded-3 container">
                        <div className="card-body p-4 cont-4">
                            <h4 className="text-center my-3 pb-3 k100">To Do App</h4>
                            <form className="row row-cols-lg-auto k100 k101 g-3 justify-content-center align-items-center mb-4 pb-2" onSubmit={handleSubmit( addTask)}>
                            <div className="col-12 k100 ">
                                <div className="form-outline">
                                <input type="text" id="form1" className="form-control" ref={newTask} placeholder="Enter Task Here"/>
                                </div>
                            </div>

                            <div className="col-12 k100">
                                <button type="submit" className="btn btn-primary button-36" >Save</button>
                            </div>
                            </form>
                            <table className="table mb-4 k100 k103">
                            <thead className="k102">
                                <tr className='k102'>
                                <th className='col' scope="col">No.</th>
                                <th className='col' scope="col">Todo item</th>
                                <th className='col' scope="col">Status</th>
                                <th className='col'  scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody className='t100'>
                               
                                {task.map((task , index) => (
                                   
                                    <tr className='col col-r'key={index}>
                                    <th className='col'scope="row">{index + 1}</th>
                                    <td className='col'>{task.todo}</td>
                                    <td className='col'>{task.progress} </td>
                                    <td className='col'>
                                        <button type="click" className="btn btn-danger button-36" value={index} onClick={deleteButton} >Delete</button>
                                        <button type="submit" className="btn btn-success ms-1 button-36" onClick={() => statusButton(index)}>Status</button>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </div>
    )
}

export default Main;