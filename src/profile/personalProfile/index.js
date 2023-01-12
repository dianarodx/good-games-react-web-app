import ProfileInfo from "../profileInfo";
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../../services/auth-thunks";
import FollowingTab from "../followingTab";
import StatTab from "../statTab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PersonalProfilePage = () => {
    const {currentUser, profileInfo} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    if (!profileInfo || profileInfo.user.username !== currentUser.username) {
        dispatch(profileThunk({username: currentUser.username}))
        return 'Loading...'
    }
    return (
        <>
            <Container className={'outer'}>
                <Row>
                    <Col>
                        <StatTab username={currentUser.username}/>
                    </Col>
                    <Col>
                        <div className={'alignProfileInfo'}>
                            <ProfileInfo profileInfo={profileInfo} usePrivate={true}/>
                        </div>
                    </Col>
                    <Col>
                        <FollowingTab username={currentUser.username}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PersonalProfilePage