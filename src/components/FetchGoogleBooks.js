import axios, {get} from "axios";
import {useEffect, useState} from "react";
import Table from "./Table";
import DetailedData from "./DetailedData";
import Breadcrumb from "./Breadcrumb";
import Center from "./Center";

const FetchGoogleBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    console.log(selectedRow)
    const [historyLink, setHistoryLink] = useState([]);

    const handleRowClick = (selectedRow) => {
        setSelectedRow(selectedRow)
        setHistoryLink((prevHistoryLink) => [...prevHistoryLink, selectedRow]);
    }

    const handleBreadcrumbClick = (index) => {
        setHistoryLink((prevHistoryLink) => prevHistoryLink.slice(0, index + 2));
        setSelectedRow(historyLink[index]);
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    const fetchBooks = async () => {
        try {
            const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=cars&maxResults=20&key=AIzaSyCQWWRz4MYaClBjausXxkwpc5L7q3KtnYU');
            setBooks(response.data.items);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    if (loading) {
        return <div className="flex text-6xl lg:text-8xl justify-center mt-20">LOADING...</div>
    }

    return (
        <Center>
            <div className="grid grid-cols-1 lg:grid-cols-2">
            <Breadcrumb historyLink={historyLink} onBreadcrumbClick={handleBreadcrumbClick}/>
            {selectedRow && <DetailedData data={selectedRow}/>}
            </div>
            <Table data={books} selectedRow={selectedRow} onRowClick={handleRowClick}/>
        </Center>
    );
}

export default FetchGoogleBooks