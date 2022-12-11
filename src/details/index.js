import { useParams } from 'react-router';
import {useEffect, useState} from "react";
import './index.css'

const DetailsPage = () => {
    const {did} = useParams()
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`https://api.boardgameatlas.com/api/search?ids=${did}&client_id=4gFhrrSLjP`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (result.games && result.games.length !== 0) {
                        setItem(result.games[0]);
                    }
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [did]);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1 className={"title"}>{item.name}</h1>
                <div className={"detail-info"}>
                <img src={item.thumb_url} alt={item.name} className={"img-detail"}/>
                    <span className={"descriptions"}> {item.description_preview}</span>
                </div>
        </div>
        );
    }
}

export default DetailsPage