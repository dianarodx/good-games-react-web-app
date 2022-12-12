import Button from "../util-components/button";
import React, {useEffect, useState} from "react"
import {useSelector} from "react-redux";
import './index.css'
import {Navigate} from "react-router";


const HomePage = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [doDetails, setDoDetails] = useState(false);
    const[detailID, setDetailID] = useState('');

    useEffect(() => {
        fetch(`https://api.boardgameatlas.com/api/search?min_age=10&order_by=rank&ascending=false&limit=3&client_id=4gFhrrSLjP`)
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
                <div className={"row featured-panels"}>
            <div className={"col-4"}>
                <h1 className={"featured-info"}> Featured Games </h1>
                {items.map((item) => (
                    <div className={"featured"} key={item.id}>
                        <div className={"feature-content"}>
                            <h2>{item.name}</h2>
                            <div className={"featured-info row"}>
                                <div className={"col-2"}>
                                    <img src={item.thumb_url} alt={item.name} className={"featured-img-result"}/>
                                </div>
                                <div className={"feature-container"}>
                                    <span className={"feature-description"}>{item.description_preview}</span>
                                </div>
                            </div>
                            <Button onClick={() => goToDetails(item.id)}>Details</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        )
    }
    else {
        return (
                <div>
                    <h1 className={"featured-info"}> Featured Games </h1>
                    {items.map((item) => (
                        <div className={"featured"} key={item.id}>
                            <div className={"feature-content"}>
                                <h2>{item.name}</h2>
                                <div className={"featured-info row"}>
                                    <div className={"col-3"}>
                                        <img src={item.thumb_url} alt={item.name} className={"featured-img-result"}/>
                                    </div>
                                    <div className={"feature-container col-6"}>
                                        <span className={"feature-description"}>{item.description_preview}</span>
                                    </div>
                                </div>
                                <Button onClick={() => goToDetails(item.id)}>Details</Button>
                            </div>
                        </div>
                    ))}
                </div>
        )
    }
}

export default HomePage
