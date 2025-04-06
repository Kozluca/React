import './App.css'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
   <div>
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
        
   </div>
   
  )
}

export default App



