import Button from '../util-components/button'
import {useDispatch, useSelector} from "react-redux";
import {deleteReviewThunk} from "../services/game-thunks";
import {Link} from "react-router-dom";
import {Rating} from "@mui/material";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Reviews = ({reviews}) => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const deleteReview = (reviewID) => {
        dispatch(deleteReviewThunk(reviewID))
    }
    return (
        <>
            {reviews.map((review) => (
                <Container className={'containerClass'} key={review._id}>
                    <Row className={'reviewForm'}>
                        <Col>
                            <Link to={`/profile/${review.username}`}>{review.username}</Link>
                            <br/>
                            <Rating
                                name="simple-controlled"
                                value={review.rating}
                                readOnly
                            />
                            <div>{review.review}</div>
                        </Col>
                        <Col xs={2}>
                            {(currentUser && review.username === currentUser.username) || currentUser.role === 'ADMIN' ?
                             <Button type={'secondary'} size={'sm'}
                                     onClick={() => deleteReview(review._id)}>Delete Review</Button>
                                                                                     : ''
                            }
                        </Col>
                    </Row>
                    <hr/>
                </Container>
            ))}
        </>
    )
}

export default Reviews