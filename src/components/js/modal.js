import React from 'react'

function Modal({ closeModal }) {
    return (
        <div className="modal-container" onClick={(e) => {
            if (e.target.className === "modal-container") closeModal()
        }}>
            <div className="modal">
                <form>
                    <div className="form-group">
                        <lable htmlFor="page">Name</lable>
                        <input name="page"></input>
                    </div>
                    <div className="form-group">
                        <lable htmlFor="author">Author</lable>
                        <input name="author"></input>
                    </div>
                    <div className="form-group">
                        <lable htmlFor="category">Category</lable>
                        <select name='category'>
                            <option value="poetry">Poetry</option>
                            <option value="romance">Romance</option>
                            <option value="novel">Novel</option>
                            <option value="mystery">Mystery</option>
                            <option value="fiction">Fiction</option>
                            <option value="non-finction">Non-Fiction</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <lable htmlFor="ISBN">ISBN</lable>
                        <input name="ISBN"></input>
                    </div>

                    <div className="form-group">
                        <lable htmlFor="page">Created At:</lable>
                        <input name="page"></input>
                    </div>
                    <div className="form-group">
                        <lable htmlFor="page">Edited At:</lable>
                        <input name="page"></input>
                    </div>
                    <button className='btn' type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}

export default Modal