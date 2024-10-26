import React from "react";

const handleChange = ({ currentTarget: input }) => {
   
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // 
    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            
        }
    }
};

function Modal({closeModel}) {
    return <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button onClick={() => closeModel(false)}>x</button>
            </div>
            <div className="title">
                <h1>Create New Catagory</h1>
            </div>
            <form className="catagory_container" onSubmit={handleSubmit}>
                <div className="body">
                    <p>
                    <input
							type="text"
							placeholder="Catagoty"
							name="catagory"
							onChange={handleChange}
							// value={data.firstName}
							required
							className="input"
						/>
                    </p>
                </div>
                <div className="footer">
                    <button onClick={() => closeModel(false)}>Cancel</button><button type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>;
}

export default Modal;