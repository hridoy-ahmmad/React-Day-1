import React from 'react';

const ToDO = ({ task, time, isDone }) => {
    return isDone ?
        <h1>{task} is done , Duration:{time} </h1> :
        <h1> {task} is not completed yet </h1>
};

export default ToDO;