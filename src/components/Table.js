import {useState} from "react";

export default function Table({data}) {
    const [selectedRow, setSelectedRow] = useState(null);
    console.log(selectedRow)

    const handleRowClick = (selectedRow) => {
        setSelectedRow(selectedRow)
    }
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Author</th>
                <th>Title</th>
            </tr>
            </thead>
            <tbody>
            {data.map((book) => (
                <tr
                    key={book.id}
                    onClick={() => handleRowClick(book)}
                    className={selectedRow === book ? 'bg-green-200' : ''}
                >
                    <td>{book.id}</td>
                    <td>{book.volumeInfo.authors}</td>
                    <td>{book.volumeInfo.title}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}