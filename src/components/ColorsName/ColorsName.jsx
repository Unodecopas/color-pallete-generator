import React, { useState } from 'react'
import styles from './styles.module.css'
const ColorsName = ({ myColors, setMyColors, favorites, setFavorites }) => {
  const [error, setError] = useState('')
  const addFavorite = (e) => {
    e.preventDefault()
    myColors.name !== ''
      ? setFavorites([...favorites, myColors])
      : setError('Name is required')
  }
  return (
    <form className={styles.colorsName}>
        <label htmlFor="name">Name</label>
        <div className={styles.inputs}>
        <input type="text" id='name' placeholder={error || ''} value={myColors.name} onChange={e => setMyColors({ name: e.target.value, colors: myColors.colors }) } />
        <button onClick={addFavorite}>+</button>
        </div>
    </form>
  )
}

export default ColorsName
