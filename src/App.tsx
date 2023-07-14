import { BrowserRouter } from 'react-router-dom'

import { PageLayout } from 'components'

import './styles/index.global.scss'

const App = () => (
  <BrowserRouter>
    <PageLayout />
  </BrowserRouter>
)

export default App
