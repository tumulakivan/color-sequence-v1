import {useState} from 'react'

const Tile = ({index, onUpdate, currentTile}) => {
    const [bgColor, setBgColor] = useState('bg-slate-600')
    const [state, setState] = useState(0)

    const handleColor = () => {
        switch(index) {
            case 1: setBgColor(prevColor => prevColor === 'bg-slate-600' ? 'bg-tile1' : 'bg-slate-600')
            break
            case 2: setBgColor(prevColor => prevColor === 'bg-slate-600' ? 'bg-tile2' : 'bg-slate-600')
            break
            case 3: setBgColor(prevColor => prevColor === 'bg-slate-600' ? 'bg-tile3' : 'bg-slate-600')
            break
            case 4: setBgColor(prevColor => prevColor === 'bg-slate-600' ? 'bg-tile4' : 'bg-slate-600')
            break
            case 5: setBgColor(prevColor => prevColor === 'bg-slate-600' ? 'bg-tile5' : 'bg-slate-600')
            break
            case 6: setBgColor(prevColor => prevColor === 'bg-slate-600' ? 'bg-tile6' : 'bg-slate-600')
            break
            case 7: setBgColor(prevColor => prevColor === 'bg-slate-600' ? 'bg-tile7' : 'bg-slate-600')
            break
            case 8: setBgColor(prevColor => prevColor === 'bg-slate-600' ? 'bg-tile8' : 'bg-slate-600')
            break
            case 9: setBgColor(prevColor => prevColor === 'bg-slate-600' ? 'bg-tile9' : 'bg-slate-600')
            break
        }

        if (state === 0) setState(1)
        else setState(0)
    }

    const handleUpdate = () => {
        if(onUpdate) {
            onUpdate(index)
        }
    }

    const handleClick = () => {
        handleUpdate()
        handleColor()
    }
    
    return (
        <div className={`h-20 w-48 ${bgColor} m-2 rounded-lg items-center flex justify-center hover:bg-red-400 hover:shadow-custom-top-bar-dark transition-shadow duration-300 ease-in-out shadow-custom-top-bar`} onClick={handleClick}></div>
    )
}

export default Tile