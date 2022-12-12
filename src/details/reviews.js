import Button from '../util-components/button'
import {useDispatch} from "react-redux";
import {deleteReviewThunk} from "../services/game-thunks";
import {Link} from "react-router-dom";
import {Rating, Typography} from "@mui/material";

const Reviews = ({reviews}) => {
    const dispatch = useDispatch()
    const deleteReview = (reviewID) => {
        dispatch(deleteReviewThunk(reviewID))
    }
    return (
        <>
            {reviews.map((review) => (
                <>
                    <div className={'reviewForm'} key={review._id}>
                        <Link to={`/profile/${review.username}`}>{review.username}</Link>
                        <Typography>Rating:</Typography>
                        <Rating
                            name="simple-controlled"
                            value={review.rating}
                            readOnly
                        />
                        <div>Review: {review.review}</div>
                        <Button type={'secondary'} size={'sm'} onClick={() => deleteReview(review._id)}>Delete Review</Button>
                    </div>
                    <hr/>
                </>
            ))}
        </>
    )
}

export default Reviews