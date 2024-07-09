import React from "react";



export const Table = ({ rows }) => {
    return <div className="table-wrapper ">
        <table className="table">
            <caption>
                List of books
            </caption>
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
                    rows.map((rows, id) => {
                        return <tr key={id}>
                            <td>{rows.name}</td>
                            <td>{rows.author}</td>
                            <td>{rows.category}</td>
                            <td>{rows.createdAt}</td>
                            <td>{rows.editedAt}</td>
                        </tr>
                    })
                }
                <tr>
                    <td>1984</td>
                    <td>Orwell George</td>
                    <td>Poetry</td>
                    <td>20394848</td>
                    <td>12 July</td>
                    <td>12 July</td>
                    <td className="actions">
                        <button>Delete</button>
                        <button>Edit</button>
                        <button>Deactivate/Re-Activate</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}