export default function DetailedData({data}) {
    return (
        <div className="bg-green-200 max-w-[500px] my-0 mx-auto rounded-xl border-2 border-red-500 p-4 gap-2 grid">
            <h1 className="text-2xl">Detailed Data:</h1>
            <p>
                <img className="max-w-[70px] max-h-[70px]"
                     src={data.volumeInfo.imageLinks.smallThumbnail}/>
            </p>
            <p>
                <span>ID: </span>
                <span>{data.id}</span>
            </p>
            <p>
                <span>Author:  </span>
                <span
                    className={data.volumeInfo.authors ? "" : "bg-red-500 text-white p-2"}
                >
                    {data.volumeInfo.authors || "Unknown"}
                </span>
            </p>
            <p>
                <span>Title:  </span>
                <span
                    className={data.volumeInfo.title ? "" : "bg-red-500 text-white p-2"}>{data.volumeInfo.title || "Unknown"}</span>
            </p>
            <p>
                <span>Categories:  </span>
                <span
                    className={data.volumeInfo.categories ? "" : "bg-red-500 text-white p-2"}>{data.volumeInfo.categories || "Unknown"}</span>
            </p>
            <p>
                <span>Rating:  </span>
                <span
                    className={data.volumeInfo.averageRating ? "" : "bg-red-500 text-white p-2"}>{data.volumeInfo.averageRating || "Unknown"}</span>
            </p>
            <p>
                <span>Pages:  </span>
                <span
                    className={data.volumeInfo.pageCount ? "" : "bg-red-500 text-white p-2"}>{data.volumeInfo.pageCount + " p." || "Unknown"}</span>
            </p>
            <p>
                <span>Published date:  </span>
                <span
                    className={data.volumeInfo.publishedDate ? "" : "bg-red-500 text-white p-2"}>{data.volumeInfo.publishedDate || "Unknown"}</span>
            </p>
            <p>
                <span>Publisher:  </span>
                <span
                    className={data.volumeInfo.publisher ? "" : "bg-red-500 text-white p-2"}>{data.volumeInfo.publisher || "Unknown"}</span>
            </p>
        </div>
    )
}