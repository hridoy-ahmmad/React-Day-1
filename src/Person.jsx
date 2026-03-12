import React from 'react';

const Person = ({person}) => {
    const {name, age} = person
    return (
        <div>
            <h1>name:{name} </h1>
            <h1>age:{age} </h1>
        </div>
    );
};

export default Person;