import React from 'react';

const Home = () => {



    const handleWork = e => {
        e.preventDefault();
        const task = e.target.task.value;
        const description = e.target.description.value;
        const work = { task, description };

        fetch('http://localhost:5000/works', {
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
    return (
        <div>
            <h2 className='my-8 text-3xl text-primary text-center'>To Do List</h2>

            <form onSubmit={handleWork} className=''>
                <input type="text" name='task' placeholder="Task Name" class="mr-0 lg:mr-4 mb-4 input input-bordered w-full max-w-xs" />
                <input type="text" name='description' placeholder="Description" class="mr-0 lg:mr-4 mb-4  input input-bordered w-full max-w-xs" />
                <input type="submit" value="Add Work" class="btn btn-primary w-full max-w-xs" />
            </form>

        </div>
    );
};

export default Home;