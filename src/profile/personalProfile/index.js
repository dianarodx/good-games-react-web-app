import ProfileInfo from "./profileInfo";
import "./index.css"

const PersonalProfilePage = () => {
    return (
        <>
            <div className={'outer'}>
                <div className={'alignProfileInfo'}>
                    <ProfileInfo/>
                </div>
            </div>
        </>
    )
}

export default PersonalProfilePage