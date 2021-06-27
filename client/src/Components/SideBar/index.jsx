import React from 'react'
import styles from './sidebar.module.scss'
import {Link} from 'react-router-dom'
const SideBar = () => {
  return (
    <article className={styles.articleContainer}>
      <h2>Chats</h2>
      <ul>
        <li><Link to="chat1">Chat 1</Link></li>
        <li><Link>Chat 2</Link></li>
      </ul>
    </article>
  )
}
export default SideBar