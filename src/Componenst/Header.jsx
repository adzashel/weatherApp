import searchIcon from "../assets/Assets/search.png";
const Header = ({ setSearch , onHandleSearch }) => {
  return (
    <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name..."
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onHandleSearch();
              e.preventDefault();
            }
          }}
        />
        <img src={searchIcon} alt="" onClick={ onHandleSearch } />
      </div>
  )
}

export default Header
