import React, { useState } from 'react'
import styles from './styles.module.css'
const ColorList = ({ myColors, setSelectedColor, selectedFav }) => {
  const [selectedOption, setSelectedOption] = useState()

  const handleClick = (index) => {
    setSelectedColor(index)
    setSelectedOption(index)
  }
  return (
    <section className={styles.colorList}>
      <ul>
        {
          myColors.colors.map((color, i) => {
            return (
              <li key={i} onClick={() => handleClick(i)}>
                <div className={selectedOption === i ? styles.colorsActive : styles.color} style={{ background: `${color}` }}>
                  {color === '' ? '+' : ''}
                </div>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default ColorList
