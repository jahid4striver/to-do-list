import React, { useState } from 'react';

const WorkTable = ({work}) => {
    const [addClass, setAddClass]= useState(false);

    const handleClass=()=>{
        setAddClass(true);
    }
    return (
        <tr>
            <td className={`${ addClass ?'line-through':''}`}>{work.task}</td>
            <td className={`${ addClass ?'line-through':''}`}>{work.description}</td>
            <td><button onClick={handleClass} className={`btn btn-success`}>Done</button></td>
            <td><button className='btn btn-danger'>Delete</button></td>
        </tr>
    );
};

export default WorkTable;