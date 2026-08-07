function SearchBar({ search, setSearch }) {
    return (
        <input className="search-bar" type="text" placeholder="search projects"
         value={search} onChange={(evt) => setSearch(evt.target.value)} />

    )

}

export default SearchBar