import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getDetailsThunk} from "../services/details-thunks";

const RecentSearches = ({username}) => {
    const [searches, setSearches] = useState([])
    const {lastSearches} = useSelector((state) => state.details)
    const dispatch = useDispatch()
    useEffect(() => {
        const ids = lastSearches.map((search) => search.gameID)
        const idString = ids.join(',')
        if (lastSearches.length !== 0) {
            fetch(`https://api.boardgameatlas.com/api/search?ids=${idString}&client_id=4gFhrrSLjP`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setSearches(result.games)
                    },
                )
        }
    }, [lastSearches]);
    useEffect(() => {
        dispatch(getDetailsThunk(username))
    }, [username, dispatch])
    return (
        <>
            <h1>Your Recent Searches</h1>
            {lastSearches.length !== searches.length ? 'No searches yet, check out some games to get started!':
                searches.map((search) => (
                    <div className={'prevSearchWrapper'} key={search.id}>
                        <Link to={`/details/${search.id}`}>{search.name}</Link>
                        <br/>
                    </div>
                ))
            }
        </>
    )
}

export default RecentSearches