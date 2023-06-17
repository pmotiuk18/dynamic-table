import {useState} from "react";

export default function Breadcrumb({historyLink, onBreadcrumbClick}) {
    return <div>
        <ul>
            {historyLink.map((item, index) => (
                <li key={index}>
                    <a
                        href="#"
                        onClick={() => onBreadcrumbClick(index)}
                    >
                        {index + 1 + ": " + item.volumeInfo.title.split(' ').slice(0, 3).join(' ') + "..."}
                    </a>
                </li>
            ))}
        </ul>
    </div>;
}