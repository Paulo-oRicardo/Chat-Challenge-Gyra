import React from 'react'
import styles from './sidebar.module.scss'
import {Link} from 'react-router-dom'
const SideBar = () => {
  return (
    <article className={styles.articleContainer}>
      <h2>Chats</h2>
      <ul>
        <li><Link to="chat1">Chat 1</Link></li>
        <li><a href="#">Chat 2</a></li>
      </ul>
    </article>
  )
}
export default SideBar