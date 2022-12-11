import {useState} from "react";
import TextField from '@mui/material/TextField';
import "./index.css";
import Button from "../../util-components/button";
import {Navigate} from "react-router";

const SearchPage = () => {
    const [error] = useState(null);
    const [searchBar, setSearchBar] = useState('')
    const [doNavigate, setDoNavigate] = useState(false);

    if (doNavigate) {
    return <Navigate to={`/results/${searchBar}`}/>
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        return <div className={"searchBar"}>
            <TextField
                name="search-form"
                label="Search for..."
                variant="outlined"
                size="small"
                value={searchBar}
                onChange={(e) => setSearchBar(e.target.value)}
            />
            <Button onClick={() => setDoNavigate(true)}>Search</Button>
        </div>;
    }
}
export default SearchPage