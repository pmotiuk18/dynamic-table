export default function Breadcrumb({historyLink, onBreadcrumbClick}) {
    return <div className="lg:my-4 mt-2">
        <ul>
            {historyLink.map((item, index) => (
                <li className="max-w-[500px] my-2 mx-auto ml-2 lg:ml-0" key={index}>
                    <a
                        href="#"
                        className=" bg-gray-700 text-white p-1 rounded-lg"
                        onClick={() => onBreadcrumbClick(index)}
                    >
                        {index + 1 + ": " + item.volumeInfo.title.split(' ').slice(0, 3).join(' ') + "..."}
                    </a>
                </li>
            ))}
        </ul>
    </div>;
}