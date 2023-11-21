import profile_picture from "../../assets/profile_picture.jpg"

function ProfilePicture() {

    return(
        <img className="rounded-full object-contain" src={profile_picture}/>
    );

}

export default ProfilePicture