export default function Table( {data} ) {
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
                <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.volumeInfo.authors}</td>
                    <td>{book.volumeInfo.title}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}