import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = (length) => [...Array(length)];


function Star({ selected = false, onSelect }) {
    return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
}

function StarRating({ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
        <div>selectedStars
            {createArray(totalStars).map((val, index) => {
                return <Star
                    key={index}
                    selected={selectedStars > index}
                    onSelect={() => setSelectedStars(index + 1)} />
            }
            )
            }
            <p>Number of stars{selectedStars} of {totalStars}</p>
        </div>
    )
}

export default function App() {
    return <StarRating totalStars={10} />
}