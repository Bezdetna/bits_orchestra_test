import { Link, useNavigate } from "react-router-dom";
import { format } from 'date-fns';

export default function Add() {

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const book = Object.fromEntries(formData.entries());

        const createdAt = format(new Date(), "d MMMM yyyy, h:mma");
        book.createdAt = createdAt;
        book.editedAt = createdAt;



        if (!book.name || !book.author || !book.isbn || !book.category) {
            alert("Please fill all the fields!")

            return
        }
        try {
            const response = await fetch("http://localhost:3000/books", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            })


            if (response.ok) {
                navigate("/")

            } else if (response.status === 400) {
                alert("Validation error!")
            } else {
                alert("Unable to create the book")
            }
        }
        catch (error) {
            alert("Unable to connect to the server")
        }


    }


    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto rounded border p-4">
                    <h2 className="text-center mb-5">
                        Add Book
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <lable className="col-sm-4 col-form lable">
                                Name
                            </lable>
                            <div className="col-sm-8">
                                <input className="form-control" name="name" />
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <lable className="col-sm-4 col-form lable">
                                Author
                            </lable>
                            <div className="col-sm-8">
                                <input className="form-control" name="author" />
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <lable className="col-sm-4 col-form lable" name="category">
                                Category
                            </lable>
                            <div className="col-sm-8">
                                <select className="form-select" name="category" >
                                    <option value="poetry">Poetry</option>
                                    <option value="romance">Romance</option>
                                    <option value="novel">Novel</option>
                                    <option value="mystery">Mystery</option>
                                    <option value="fiction">Fiction</option>
                                    <option value="non-finction">Non-Fiction</option>
                                </select>
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <lable className="col-sm-4 col-form lable">
                                ISBN
                            </lable>
                            <div className="col-sm-8">
                                <input type="text" id="isbn" name="isbn" inputmode="numeric" pattern="\d{10}|\d{13}" title="Please enter a valid ISBN-10 or ISBN-13" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 13);" />
                                <span className="text-danger"></span>
                            </div>
                        </div>


                        <div className="row">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                            <div className=" col-sm-4 d-grid">
                                <Link className="btn btn-secondary" role="button" to="/">Cancel</Link>
                            </div>
                        </div>

                    </form>


                </div>
            </div>
        </div>
    )
}