import {useState} from "react";

export default function Table({data}) {
    const [selectedRow, setSelectedRow] = useState(null);
    console.log(selectedRow)

    const handleRowClick = (selectedRow) => {
        setSelectedRow(selectedRow)
    }
    return (
        <table className="max-w-5xl my-0 mx-auto justify-center">
            <thead>
            <tr>
                <th className="bg-gray-800 border-2 border-white text-white">ID</th>
                <th className="bg-gray-800 border-2 border-white text-white">Author</th>
                <th className="bg-gray-800 border-2 border-white text-white">Title</th>
            </tr>
            </thead>
            <tbody className="text-white">
            {data.map((book) => (
                <tr
                    key={book.id}
                    onClick={() => handleRowClick(book)}
                    className={selectedRow === book ? 'bg-gray-500' : 'cursor-pointer bg-gray-700 '}
                >
                    <td className="border-2 border-white text-white">{book.id}</td>
                    <td className="border-2 border-white text-white">{book.volumeInfo.authors}</td>
                    <td className="border-2 border-white text-white">{book.volumeInfo.title}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}