import './App.css'
import HomePage from './components/HomePage'
import { CoffeeProvider } from './context/CoffeContext'

function App() {
	return (
		<CoffeeProvider>
			<HomePage />
		</CoffeeProvider>
	)
}

export default App
