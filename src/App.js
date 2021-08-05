import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Navbar from '../src/components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Contact from './Pages/Contact'
import Footer from './components/footer/Footer'

function App() {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<BrowserRouter>
			<GlobalStyles />
			<div>
				<Navbar toggle={toggle} />
				<Sidebar isOpen={isOpen} toggle={toggle} />
			</div>

			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/menu' component={Menu} />
				<Route path='/about' component={About} />
				<Route path='/contact' component={Contact} />
				<Route component={NotFound} />
			</Switch>

			<Footer />
		</BrowserRouter>
	)
}

export default App
