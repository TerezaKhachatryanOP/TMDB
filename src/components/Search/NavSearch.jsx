import searchIcn from "../../assets/nav-search.png"
import "../../styles/search/navSearch.css"

export default function NavSearch() {
    return (
        <div className="nav-search-wrapper">
            <img 
                src={searchIcn} 
                alt="search-icon" 
                className="nav-search-icn"
            />
            <input 
                name="Search-input"
                type="text"
                placeholder="Search for movie, tv show, person..."
                className="nav-search-input"
            />
        </div>
    )
}