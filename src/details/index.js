import { useParams } from 'react-router';
import {useEffect, useState} from "react";
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {getReviewsThunk, getRatingThunk} from '../services/game-thunks'
import Reviews from "./reviews";
import ReviewForm from './reviewForm'
import {Rating, Typography} from "@mui/material";

const DetailsPage = () => {
    const {did} = useParams()
    const {reviews, rating} = useSelector((state) => state.games)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);
    const dispatch = useDispatch()

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
        dispatch(getRatingThunk(did))
        dispatch(getReviewsThunk(did))
    }, [did, dispatch]);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1 className={"title"}>{item.name}</h1>
                <div className={'rating'}>
                    <Typography>Rating:</Typography>
                    <Rating
                        name="simple-controlled"
                        value={rating}
                        readOnly
                    />
                </div>
                <div className={"detail-info"}>
                    <img src={item.thumb_url} alt={item.name} className={"img-detail"}/>
                    <span className={'descriptions'}> {item.description_preview}</span>
                </div>
                <hr/>
                <ReviewForm gameID={did}/>
                <hr/>
                <Reviews reviews={reviews}/>
            </div>
        );
    }
}

export default DetailsPage