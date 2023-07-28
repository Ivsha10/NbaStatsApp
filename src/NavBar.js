import { Link } from "react-router-dom"
const NavBar = () => {
    return (
       <ul className="navbar">
            <Link className="navbarItem" to={'/'}>Home</Link>
            <Link className="navbarItem" to={'/playerbyname'}>Search Player Season Stats</Link>
            <Link className="navbarItem" to={'/topscorers'}>Top Scorers</Link>
            <Link className="navbarItem" to={'/topscorersplayoffs'}>Top Scorers Playoffs</Link>
            <Link className="navbarItem" to={'/topassists'}>Top Assists</Link>
            <Link className="navbarItem" to={'topassistsplayoffs'}>Top Assists Playoffs</Link>
            <Link className="navbarItem" to={'/toprebounders'}>Top Rebounders</Link>
            <Link className="navbarItem" to={'/compareplayers'}>Compare Players</Link>
       </ul>
    )
}

export default NavBar
