import React, { useState } from 'react';

const WorkTable = ({ work }) => {
    const { _id, task, description } = work;
    const [addClass, setAddClass] = useState(false);

    const handleClass = () => {
        setAddClass(true);
    }

    const handleDelete = (id) => {
        const procced = window.confirm('Are You Sure Want to Delete')
        if (procced) {
            fetch(`https://my-to-do-list-work.herokuapp.com/works/${id}`, {
                method: 'DELETE',
            })
            .then(res=> res.json())
            .then(data=>console.log(data))
        }

    }
    return (
        <tr>
            <td className={`${addClass ? 'line-through' : ''}`}>{task}</td>
            <td className={`${addClass ? 'line-through' : ''}`}>{description}</td>
            <td><button onClick={handleClass} className={`btn btn-success`}>Done</button></td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button></td>
        </tr>
    );
};

export default WorkTable;