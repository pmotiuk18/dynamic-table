export default function Table({data, onRowClick, selectedRow}) {

    return (
        <table className="my-0 mx-auto justify-center">
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
                    onClick={() => onRowClick(book)}
                    className={selectedRow === book ? 'bg-gray-500' : 'cursor-pointer bg-gray-700 '}
                >
                    <td className={book.id ? "border-2 border-white text-white" : "border-2 border-white bg-red-500"}>{book.id}</td>
                    <td className={book.volumeInfo.authors ? "border-2 border-white text-white" : "border-2 border-white bg-red-500"}>{book.volumeInfo.authors || "Unknown"}</td>
                    <td className={book.volumeInfo.title ? "border-2 border-white text-white" : "border-2 border-white bg-red-500"}>{book.volumeInfo.title}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}