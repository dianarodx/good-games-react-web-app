import {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import "./index.css";
import Button from "../util-components/button";

const SearchPage = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [searchBar, setSearchBar] = useState('')
    const [q, setQ] = useState("");

    useEffect(() => {
        fetch(`https://api.boardgameatlas.com/api/search?name=${q}&order_by=rank&ascending=false&limit=10&client_id=4gFhrrSLjP`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.games);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [q]);

if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <div className={"searchBar"}>
                    <TextField
                        name="search-form"
                        label="Search for..."
                        variant="outlined"
                        size="small"
                        value={searchBar}
                        onChange={(e) => setSearchBar(e.target.value)}
                    />
                    <Button onClick={() => setQ(searchBar)}>Search</Button>
                </div>
                <div>
                    {items.map((item) => (
                                <div className={"result"}>
                                    <div className={"result-content"}>
                                    <h2>{item.name}</h2>
                                    <div className={"result-info row"}>
                                        <div className={"col-3"}>
                                            <img src={item.thumb_url} alt={item.name} className={"img-result"}/>
                                        </div>
                                        <div className={"col-6 description-container"}>
                                            <span className={"description"}>{item.description_preview}</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default SearchPage