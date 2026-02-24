import "../../styles/MovieStyles/LoadMore.css"

export default function LoadMore ({handleClick}) {
    return (
        <button className="load-more-btn" onClick={handleClick}>Load More</button>
    )
}