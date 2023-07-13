import { BrowserRouter } from 'react-router-dom'

import './styles/index.global.scss'
import { PageLayout } from './components'

const App = () => (
  <BrowserRouter>
    <PageLayout />
  </BrowserRouter>
)

export default App
