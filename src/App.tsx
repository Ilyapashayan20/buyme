import { BrowserRouter } from 'react-router-dom'

import { PageLayout } from 'components'

import './styles/index.global.scss'
import { Provider } from 'react-redux'
import store from 'store/store'

const App = () => (
  <Provider store={store}>
  <BrowserRouter>
    <PageLayout />
  </BrowserRouter>
  </Provider>
)

export default App
