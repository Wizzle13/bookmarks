import React from "react";

function Modal({closeModel}) {
    return <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button onClick={() => closeModel(false)}>x</button>
            </div>
            <div className="title">
                <h1>Create New Catagory</h1>
            </div>
            <div className="body">
                <p>
                    Form
                </p>
            </div>
            <div className="footer">
                <button onClick={() => closeModel(false)}>Cancel</button><button>Save</button>
            </div>
        </div>
    </div>;
}

export default Modal;