import React, { useEffect, useState } from 'react'
import { CompactPicker } from 'react-color'
import './App.css'
import ColorList from './components/ColorsList/ColorList'
import ColorsName from './components/ColorsName/ColorsName'
import Header from './components/Header/Header'
import SavedFavs from './components/SavedFavs/SavedFavs'

function App () {
  const [myColors, setMyColors] = useState({ name: 'test', colors: ['red', 'green', 'yellow', '', ''] })
  const [selectedColor, setSelectedColor] = useState()
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favColors') || '[]'))
  const [selectedFav, setSelectedFav] = useState()

  useEffect(() => {
    localStorage.setItem('favColors', JSON.stringify(favorites))
  }, [favorites])
  useEffect(() => {
    if (selectedFav) { setMyColors(selectedFav) }
  }, [selectedFav])
  const handleColor = (color) => {
    const newColor = [...myColors.colors]
    newColor[selectedColor] = color.hex
    setMyColors({ name: myColors.name, colors: newColor })
  }

  return (
    <div className="App">
      <Header />
      <main>
        <ColorList myColors={myColors} setSelectedColor={setSelectedColor} />
        <div className='options'>
        <CompactPicker onChange={handleColor}/>
        <ColorsName myColors={myColors} setMyColors={setMyColors} favorites={favorites} setFavorites={setFavorites}/>
        </div>
        <SavedFavs favorites={favorites} setFavorites={setFavorites} setSelectedFav={setSelectedFav}/>

      </main>
    </div>
  )
}

export default App
