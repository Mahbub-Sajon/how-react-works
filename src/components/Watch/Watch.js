import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps (newStepsCount);
    }

    useEffect( () => {
        console.log(steps)
    }, [steps])
    return (
        <div>
            <h3>This is my smart Watch</h3>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseSteps}>De Dour....................</button>
        </div>
    );
};

export default Watch;