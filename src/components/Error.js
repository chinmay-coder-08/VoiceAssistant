import React from 'react'

const Error = () => {
    return (
        <>
            <div className="container">
                <div className="alert alert-danger alert-dismissible fade show aa" role="alert">
                    <strong>Error!!</strong> Invalid Crediantials
                    <button style={{ boxShadow: "none" }} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </>
    )
}

export default Error;