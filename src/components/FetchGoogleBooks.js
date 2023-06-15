import axios, {get} from "axios";
import {useEffect, useState} from "react";
import Table from "./Table";

const FetchGoogleBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        return <div>LOADING...</div>
    }

    return <Table data={books} />;
}

export default FetchGoogleBooks