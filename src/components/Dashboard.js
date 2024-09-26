import React from 'react'

const Dashboard = () => {
    async function getData() {
        const res = await fetch("https://dictionaryapi.com/api/v3/references/learners/json/good?key=f276c47d-117a-4e13-8554-01e72d75d1d9")
        const data = await res.json();
        console.log(data);
    }
    getData();
    return (
        <div className="container">
            <h1>Hello Dashboard</h1>
        </div>
    )
}

export default Dashboard;
