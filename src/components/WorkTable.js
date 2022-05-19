import React from 'react';

const WorkTable = ({work}) => {
    return (
        <tr>
            <td>{work.task}</td>
            <td>{work.description}</td>
            <td><button className='btn btn-success'>Complete</button></td>
            <td><button className='btn btn-danger'>Delete</button></td>
        </tr>
    );
};

export default WorkTable;