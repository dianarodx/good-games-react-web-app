import {useParams} from "react-router";

const OtherProfilePage = () => {
    const {uid} = useParams()
    return (
        <h1>On Profile of User: {uid}</h1>
    )
}

export default OtherProfilePage