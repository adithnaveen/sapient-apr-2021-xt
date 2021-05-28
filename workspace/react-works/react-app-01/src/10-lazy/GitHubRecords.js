// to get the data from rest end point -> https://api.github.com/users

import React, { useState, useEffect } from 'react'

const GitHubRecords = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users")
            .then(resp => resp.json())
            .then(setData)
    }, []);

    if (data.length > 0) {
        return (
            <div>
                <ul>
                    {
                        data.map((user, index) => (
                            <li key={user.id}>{user.login}</li>
                        ))
                    }
                </ul>
                <button
                    className="btn btn-danger"
                    onClick={() => { setData([]) }}>Clear</button>
            </div>
        );
    }
    return <p>Sorry No Data... </p>

}

export default GitHubRecords

