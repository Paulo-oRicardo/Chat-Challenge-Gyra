import React from 'react'
import styles from './sidebar.module.scss'
import {Link} from 'react-router-dom'
const SideBar = () => {
  return (
    <article className={styles.articleContainer}>
      <h2>Chats</h2>
      <ul>
        <Link to="chat1"><li>Chat 1</li></Link>
        <Link><li>Chat 2</li></Link>
      </ul>
    </article>
  )
}
export default SideBar