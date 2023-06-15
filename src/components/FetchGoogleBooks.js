import axios, {get} from "axios";
import {useEffect, useState} from "react";
import Table from "./Table";
import DetailedData from "./DetailedData";

const FetchGoogleBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    console.log(selectedRow)

    const handleRowClick = (selectedRow) => {
        setSelectedRow(selectedRow)
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
        return <div className="flex text-8xl justify-center mt-20">LOADING...</div>
    }

    return (
        <>
            {selectedRow && <DetailedData data={selectedRow}/>}
            <Table data={books} selectedRow={selectedRow} onRowClick={handleRowClick}/>
        </>
    );
}

export default FetchGoogleBooks