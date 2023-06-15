export default function DetailedData({data}) {
    const {
        id,
        volumeInfo: {
            imageLinks: {
                smallThumbnail
            },
            authors,
            title,
            categories,
            averageRating,
            pageCount,
            publishedDate,
            publisher,
        },
    } = data;

    const renderField = (label, value) => (
        <p>
            <span>{label}: </span>
            <span className={value ? "" : "bg-red-500 text-white"}>{value || "Unknown"}</span>
        </p>
    );

    return (
        <div className="bg-green-200 max-w-[500px] my-0 mx-auto rounded-xl border-2 border-red-500 p-4 gap-2 grid">
            <h1 className="text-2xl">Detailed Data:</h1>
            <img className="max-w-[70px] max-h-[70px]" src={smallThumbnail} alt="Book cover"/>
            {renderField("ID", id)}
            {renderField("Author", authors)}
            {renderField("Title", title)}
            {renderField("Category", categories)}
            {renderField("Rating", averageRating)}
            {renderField("Pages", pageCount)}
            {renderField("Published", publishedDate)}
            {renderField("Publisher", publisher)}
        </div>
    )
}