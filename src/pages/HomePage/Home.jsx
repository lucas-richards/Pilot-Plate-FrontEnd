import { useEffect, useState } from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import { getbusinesses } from '../../api/yelp_api'
import ModalFilter from '../../components/shared/ModalFilter'

const Home = (props) => {

	const [data, setData] = useState([])
	const [location, setLocation] = useState('')

	// useEffect(()=>{
	// 	getbusinesses(location)
	// 		.then(data=>{
	// 			console.log(data)
	// 			setData(data)
	// 		})
	// },[])
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<p className='homeTitle'>What do you want to eat?</p>
			<Carousel data={data} />
			<ModalFilter />
			<Navbar />
		</>
	)
}

export default Home
