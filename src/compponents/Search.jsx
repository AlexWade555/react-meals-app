import { useState } from "react"
import { useGlobalContext } from "../context"

const Search = () => {
  return <header className="search-container">
    <form>
      <input type="text" placeholder="type favourite meal" className="form-input" />
      <button type="submit" className='btn btn-hipster'>search</button>
      <button type="button" className='btn btn-hispter'>suprise me</button>
    </form>
  </header>
}

export default Search
