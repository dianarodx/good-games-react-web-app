import React, {useEffect, useState} from "react"
import {useSelector} from "react-redux";
import './index.css'
import {Navigate} from "react-router";
import FeaturedGames from "./featuredGames";
import RecentSearches from './recentSearches'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const HomePage = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [items, setItems] = useState([]);
    const [doDetails, setDoDetails] = useState(false);
    const [detailID, setDetailID] = useState('');

    useEffect(() => {
        fetch(`https://api.boardgameatlas.com/api/search?min_age=10&order_by=rank&ascending=false&limit=3&client_id=4gFhrrSLjP`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result.games);
                },
            )
    }, []);

    function goToDetails(did){
        setDoDetails(true);
        setDetailID(did);
    }

    if (doDetails) {
        return <Navigate to={`/details/${detailID}`}/>
    }

    if (currentUser) {
        return (
            <Row>
                <Col xs={8}>
                    <FeaturedGames items={items} goToDetails={goToDetails}/>
                </Col>
                <Col xs={4}>
                    <RecentSearches username={currentUser.username}/>
                </Col>
            </Row>
        )
    }
    else {
        return (
            <Col>
                <FeaturedGames items={items} goToDetails={goToDetails}/>
            </Col>
        )
    }
}

export default HomePage
