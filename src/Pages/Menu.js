import React, { useEffect } from 'react'
import Menu1 from '../components/menu/Menu1'

import { BreakfastData, LunchData } from '../ProductsData'

import { Title } from '../GlobalStyles'
import { SectionTitle } from '../components/menu/Menu1Styles'

export default function Desserts({ data }) {
	// scroll to top on page change
	useEffect(() => {
		window.scroll(0, 0)
	}, [])

	return (
		<>
			<Title style={{ marginTop: '2rem' }}>Menu</Title>
			<SectionTitle>Breakfast</SectionTitle>
			<Menu1 data={BreakfastData} />
			<SectionTitle>Lunch</SectionTitle>
			<Menu1 data={LunchData}></Menu1>
		</>
	)
}
