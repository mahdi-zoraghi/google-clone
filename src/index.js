import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import { StateProvider } from "./store/StateProvider"

import reducer, { initialState } from "./store/reducer"

import "./index.css"

ReactDOM.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>,
  document.getElementById("root")
)
