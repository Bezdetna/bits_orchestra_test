import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const Table = () => {
    const [book, setBook] = useState([]);

    function getProducts() {
        fetch('http://localhost:3000/books?_sort=id,-views')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error();
            })
            .then(data => {
                setBook(data);
            })
            .catch(error => {
                alert('Unable to get data');
            });
    }

    useEffect(() => {
        getProducts();
    }, []);




    return (
        <div className="container my-4">
            <div className="row mb-3">
                <div className="col">
                    <Link className="btn btn-primary me-1" to="add">Add Book</Link>
                    <button type="button" className="btn btn-outline-primary" onClick={getProducts}>Refresh</button>
                </div>
                <div className="col">

                </div>
                <table className="table">
                    <thead>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>ISBN</th>
                        <th>Created At:</th>
                        <th>Edited At:</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            book.map((book, id) => {
                                return (
                                    <tr key={id}>
                                        <td>{book.name}</td>
                                        <td>{book.author}</td>
                                        <td>{book.category}</td>
                                        <td>{book.isbn}</td>
                                        <td>{book.createdAt}</td>
                                        <td>{book.editedAt}</td>
                                        <td className="actions" style={{ width: "10px", whiteSpace: "nowrap" }}>
                                            <button className="btn btn-danger me-1">Delete</button>
                                            <button className="btn btn-primary me-1">Edit</button>
                                            <button type="button" className="btn btn-success me-1">Deactivate/Re-Activate</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}