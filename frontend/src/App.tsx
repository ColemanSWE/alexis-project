import React from "react";
import "./styles.scss";
import List from "./List";
import { Me } from './Me'

/**
 * Howdy, and welcome to the Alexis frontend code evaluation!
 *
 * To get started, fork this project (either click "Fork" in the
 * upper right or simply save a change).
 *
 * Please complete the following tasks:
 * - Fetch users and display their avatar and full name in a list (DONE)
 * - Display your user in the upper right of the screen (avatar & name) (DONE)
 * - Add an input where you can filter on user names (DONE)
 * - Make sure your data is typed (DONE)
 * - Style the UI at your own discretion ;) (It's ugly but this might have to do)
 *
 * Endpoints
 * - List users: https://jonruna.github.io/tapi/userList.json
 * - Data about your user: https://jonruna.github.io/tapi/me.json
 *
 * When done, please send the fork link our way! 🎉
 */

export default function App() {
  return (
    <div className="app-container">
      <Me />
      <List />
    </div>
  )
}
