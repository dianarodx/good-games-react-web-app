import {Navigate, useParams} from 'react-router';
import {useEffect, useState} from "react";
import Button from "../../util-components/button";

const SearchResultsPage = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const {query} = useParams()
    const [items, setItems] = useState([]);
    const [doDetails, setDoDetails] = useState(false);
    const[detailID, setDetailID] = useState('');

    useEffect(() => {
            fetch(`https://api.boardgameatlas.com/api/search?name=${query}&order_by=rank&ascending=false&limit=10&client_id=4gFhrrSLjP`)
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
        }, [query]);
    console.log(items)
    function goToDetails(did){
        setDoDetails(true);
        setDetailID(did);
    }
    if (doDetails) {
        return <Navigate to={`/details/${detailID}`}/>
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
                <div>
                    {items.map((item) => (
                        <>
                            <div className={"result"} key={item.id}>
                                <div className={"result-content"}>
                                    <h2>{item.name}</h2>
                                    <div className={"result-info row"}>
                                        <div className={"col-3"}>
                                            <img src={item.thumb_url} alt={item.name}
                                                 className={"img-result"}/>
                                        </div>
                                        <div className={"col-6 description-container"}>
                                            <span className={"description"}>{item.description_preview}</span>
                                        </div>
                                    </div>
                                    <Button onClick={() => goToDetails(item.id)}>Details</Button>
                                </div>
                            </div>
                            <hr/>
                        </>
                    ))}
            </div>
        );
    }
}

export default SearchResultsPage