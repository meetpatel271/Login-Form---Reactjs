import Logo from "../assets/logo.png";

export default function Header(){
    return(
        <>
            <header>
                <img src={Logo} alt="Logo"/>
                <h1>ReactArt</h1>
                <p>A community of artists and art-lovers.</p>
            </header>
        </>
    );
}