import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "@material-ui/core"
import { Search as SearchIcon, Mic as MicIcon } from "@material-ui/icons"

import { useStateValue } from "../store/StateProvider"
import { actionTypes } from "../store/reducer"

import "./Search.css"

function Search({ hideButtons = false }) {
  const [input, setInput] = useState("")
  const history = useHistory()

  const [, dispatch] = useStateValue()

  const search = e => {
    e.preventDefault()

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    })
    history.push("/search")
  }

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={e => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            type="submit"
            className="search__buttonsHidden"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button variant="outlined" className="search__buttonsHidden">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  )
}

export default Search
