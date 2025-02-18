import React,{Suspense} from 'react'
const Hello = React.lazy(()=>import('./Hello'))
function Lazy() {
  return (
    <div>
      <h1>React Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading.....</div>}>
      <Hello />
      </Suspense>
    </div>
  )
}

export default Lazy
