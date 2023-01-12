import Button from "../util-components/button";
import React from "react";

const FeaturedGames = ({items, goToDetails}) => {
    return (
        <>
            <h1 className={"featured-info"}> Featured Games </h1>
            {items.map((item) => (
                <div className={"featured"} key={item.id}>
                    <div className={"feature-content"}>
                        <h2>{item.name}</h2>
                        <div className={'alignDetailsButton'}>
                            <Button onClick={() => goToDetails(item.id)}>Details</Button>
                        </div>
                        <div className={"featured-info row"}>
                            <div className={"col-2"}>
                                <img src={item.thumb_url} alt={item.name} className={"featured-img-result"}/>
                            </div>
                            <div className={"feature-container"}>
                                <span className={"feature-description"}>{item.description_preview}</span>
                            </div>
                        </div>
                    </div>
                <hr/>
                </div>
            ))}
        </>
    )
}

export default FeaturedGames