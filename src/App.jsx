import Tile from './components/Tile'
import Palette from './components/Palette'

import { useState } from 'react'

function App() {
  const [currentTile, setCurrentTile] = useState(0)

  const updateCurrentTile = (newTile) => {
  if(currentTile === 0 && newTile != 1) {
    window.location.reload()
  } else if(currentTile === 0 || (newTile - currentTile) === 1) setCurrentTile(newTile)
    else {
      setCurrentTile(0)
      window.location.reload()
    }

    if(currentTile === 8) {
      alert('Good job!')
      window.location.reload()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-400">
      <Palette />
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col">
          <Tile index={4} onUpdate={updateCurrentTile} currentTile={currentTile} />
          <Tile index={7} onUpdate={updateCurrentTile} currentTile={currentTile} />
          <Tile index={1} onUpdate={updateCurrentTile} currentTile={currentTile} />
        </div>
        <div className="flex flex-col">
          <Tile index={8} onUpdate={updateCurrentTile} currentTile={currentTile} />
          <Tile index={3} onUpdate={updateCurrentTile} currentTile={currentTile} />
          <Tile index={5} onUpdate={updateCurrentTile} currentTile={currentTile} />
        </div>
        <div className="flex flex-col">
          <Tile index={9} onUpdate={updateCurrentTile} currentTile={currentTile} />
          <Tile index={2} onUpdate={updateCurrentTile} currentTile={currentTile} />
          <Tile index={6} onUpdate={updateCurrentTile} currentTile={currentTile} />
        </div>
      </div>
    </div>
  )
}

export default App
