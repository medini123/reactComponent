import personelImg from "../components/profilepic.jpg"
function ProfilePhoto(){
    return (
        <img className="rounded" src={personelImg} width="600px" />
    );
}

export default ProfilePhoto;