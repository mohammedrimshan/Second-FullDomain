
import './App.css'
import Input from './week 1/Input'
import LCM from './week 1/LCM'
import Base from './week 1/Base'
import Reducer from './week 2/Reducer'
import CounterProvider from './week 2/CounterProvider'
import Counter from './week 2/Counter'
import CallBack from './week 2/callBack'
import ThemeSwitcher from './week 2/ThemeSwitcher'
import ThemeProvider from './week 2/ThemeContext'
import Lazy from './week 2/Lazy'
function App() {
  return (
    <>
    <h3>useRef Example</h3>
    <Input />
    <h3>Life Cycle Methods</h3>
    <LCM />
    <h3>useEffect Example</h3>
    <Base />
    <h3>useReducer Example</h3>
    <Reducer/>
    <h3>useContext Example</h3>
    <CounterProvider>
      <Counter />
    </CounterProvider>
    <h3>useCall back and UseMemo</h3>
    <CallBack />
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
    <h3>Lazy Loading</h3>
    <Lazy />
    </>
  )
}

export default App
