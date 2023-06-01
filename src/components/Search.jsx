const Search = ({submitForm, title, getMeal}) => {
    return(
        <form onSubmit={(event) => submitForm(event)}>
            <input className="search"
            value={title} 
            onChange={(event) => getMeal(event.target.value)} placeholder="search your favorite meal..."/>
        </form>
    )
}

export default Search;