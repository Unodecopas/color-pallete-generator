import React from 'react'
import bin from '../../assets/bin.svg'
import styles from './styles.module.css'
const SavedFavs = ({ favorites, setFavorites, setSelectedFav }) => {
  const deleteFavorite = (i) => {
    const newFavs = favorites.filter((fav, index) => index !== i)
    setFavorites(newFavs)
  }
  const handleFav = (fav) => {
    setSelectedFav(fav)
  }
  return (
    <section className={styles.savedFavs}>
      <h2>Saved palletes</h2>
      <ul>
        {
          favorites.map((fav, i) => {
            return (
              <li key={i} onClick={() => handleFav(fav)}>
              <div className={styles.title}>
                <p>{fav.name}</p>
                <button onClick={() => deleteFavorite(i)}>
                  <img src={bin} alt="icon delete" />
                </button>
              </div>
              <div className={styles.colorsFav}>
                <ol>
                  {
                    fav.colors.map((favColor, i) => {
                      return (
                        <li key={i}>
                          <div className={styles.color} style={{ background: `${favColor}` }}></div>
                        </li>
                      )
                    })
                  }
                </ol>
              </div>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default SavedFavs
