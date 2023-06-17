export default function Table({data, onRowClick, selectedRow}) {
    return (
        <table>
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
                    <td className="border-2 border-white text-white">{book.id}</td>
                    <td className="border-2 border-white text-white">{book.volumeInfo.authors || "Unknown"}</td>
                    <td className="border-2 border-white text-white">{book.volumeInfo.title}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}