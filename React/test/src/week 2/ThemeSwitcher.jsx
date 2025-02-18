import React,{useContext} from 'react'
import {ThemeContext} from './ThemeContext'
function ThemeSwitcher() {
  const {theme,toggleTheme} = useContext(ThemeContext)
    return (
    <div>
      <h2>Current Theme:{theme}</h2>
      <button onClick={toggleTheme}> Switch Theme</button>
    </div>
  )
}

export default ThemeSwitcher
