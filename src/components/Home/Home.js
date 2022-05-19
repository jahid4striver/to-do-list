import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import WorkTable from '../WorkTable';

const Home = () => {
    const [works, setWorks] = useState([])
    const [user, loading] = useAuthState(auth);


    useEffect(() => {
        fetch('https://my-to-do-list-work.herokuapp.com/works')
            .then(res => res.json())
            .then(data => setWorks(data));
    }, [works, setWorks])


    const handleWork = e => {
        e.preventDefault();
        const task = e.target.task.value;
        const description = e.target.description.value;
        const work = { task, description };

        fetch('https://my-to-do-list-work.herokuapp.com/works', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(work)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
            })
    }

   const handleLogout=()=>{
    signOut(auth)
   }
    return (
        <div>
            {
                user? <button onClick={handleLogout} className='my-8 btn btn-warning'>Logout</button>:''
            }
            <h2 className='my-8 text-3xl text-primary text-center'>To Do List</h2>


            <form onSubmit={handleWork} className=''>
                <input type="text" name='task' placeholder="Task Name" class="mr-0 lg:mr-4 mb-4 input input-bordered w-full max-w-xs" />
                <input type="text" name='description' placeholder="Description" class="mr-0 lg:mr-4 mb-4  input input-bordered w-full max-w-xs" />
                <input type="submit" value="Add Work" class="btn btn-primary w-full max-w-xs" />
            </form>
            <div class="overflow-x-auto">
                <table class="table w-3/4 mx-auto">
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Description</th>
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            works.map(work => <WorkTable
                                key={work._id}
                                work={work}
                            ></WorkTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;