import {useState} from "react";

export default function Breadcrumb({historyLink, onBreadcrumbClick}) {
    return <div>
        <ul>
            {historyLink.map((item, index) => (
                <li className="my-2 ml-2" key={index}>
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