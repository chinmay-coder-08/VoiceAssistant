import React, { useState } from 'react'
import "../css/docs.css"
import optionsapi from './api/options'

const Docs = () => {
    const [options, setoptions] = useState(optionsapi)
    return (
        <>
            <main className="container">
                {/* <h1>How to use?</h1> */}
                <h2 className="">What is Quick DO??</h2>
                <p className="description my-2"><b>Fast do is simple AI assistant. You can ask current weather, search anything on YouTube, Google or Go to any website..</b></p>
                {options.map((e) => {
                    return (
                        <>
                            <button className="options">{e.title} -</button>
                            <p className="my-2 optiondesc">{e.desc}</p>
                        </>
                    )
                })}
                <h5 style={{backgroundColor:"rgb(147 255 235)", border:"2px solid black", borderRadius:"3px", textAlign: "center"}}>* Commands should be same as mentioned</h5>
        </main>
        </>
    )
}

export default Docs
