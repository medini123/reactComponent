function FullName(){
    const linkedinProfile = "https://www.linkedin.com/in/djebby-firas/";
    return (
        <h1 class="index">Zied Medini
            <a href={linkedinProfile} target="_blank"> <i style={{color:"blue"}} class="bi bi-linkedin"></i> </a>
        </h1>
    );
}

export default FullName;