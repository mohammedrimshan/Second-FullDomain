import React, {useState ,useRef} from 'react'

function Input() {
    const inputRef = useRef(null)
    const [text, setText] = useState("");

    const handleFocus = ()=>{
        inputRef.current.focus()
    }

    const handleChange = () => {
        setText(inputRef.current.value);
      };
  return (
    <div>
      <input ref={inputRef} type='text' onChange={handleChange}  placeholder='Type Something..' />
      <button onClick={handleFocus}>Focus Input</button>
      <h1>{text}</h1>
    </div>
  )
}

export default Input
