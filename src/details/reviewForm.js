import {TextField, Rating, Typography} from "@mui/material";
import {useState} from "react";
import './index.css'
import Button from "../util-components/button";
import {useDispatch, useSelector} from "react-redux";
import {addReviewThunk} from '../services/game-thunks'
import {Navigate} from "react-router";

const ReviewForm = ({gameID}) => {
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)
    const [loginRequired, setLoginRequired] = useState(false)
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.games)
    const hasReview = currentUser && reviews.some(e => e.username === currentUser.username)
    const dispatch = useDispatch()
    const submitReview = () => {
        if (currentUser) {
            const reviewInfo = {review: review, rating: rating, username: currentUser.username, gameID: gameID}
            dispatch(addReviewThunk(reviewInfo))
        }
        else {
            setLoginRequired(true)
        }
    }
    if (loginRequired) {
        return <Navigate to={'/login'}/>
    }
    return (
        <div className={'reviewForm'}>
            <Typography>Rating:</Typography>
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
                disabled={hasReview}
            />
            <Typography>Review:</Typography>
            <TextField
                placeholder="Add a review"
                multiline
                value={review}
                onChange={(e) => setReview(e.target.value)}
                rows={4}
                fullWidth
                disabled={hasReview}
            />
            <Button size={'sm'} onClick={submitReview} disabled={hasReview}>Add Review</Button>
        </div>
    )
}
export default ReviewForm