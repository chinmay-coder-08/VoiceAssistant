import React from 'react'
import "../css/modlalistening.css"

const ModalListening = ({ text, stopMic }) => {
    return (
        <>
            <div className="modal fade modal-dialog modal-dialog-centered" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="icon">
                            <i className="fas fa-microphone text-center voice-icon"></i>
                        </div>
                        <div className="modal-header ">
                            <p style={{ visibility: 'hidden' }} className="text-center ">speak to give commands</p>
                            <h5 className="modal-title" id="exampleModalLabel">
                                <b>Listening...</b>
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5 className="text-center">
                                {text}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalListening
