import { useState, useEffect } from "react"

import API_KEY from "../keys"
const CONTEXT_KEY = "68dc99a95d86c5f66"

function useGoogleSearch(term) {
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then(response => response.json())
        .then(data => setData(data))
    }
    getData()
  }, [term])

  return { data }
}

export default useGoogleSearch
