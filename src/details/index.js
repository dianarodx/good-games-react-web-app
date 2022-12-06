import { useParams } from 'react-router';

const DetailsPage = () => {
    const {did} = useParams()
    return (
        <h1>Details Page for detail ID: {did}</h1>
    )
}

export default DetailsPage