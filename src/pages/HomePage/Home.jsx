import { useEffect, useState } from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import { getbusinesses } from '../../api/yelp_api'
import ModalFilter from '../../components/shared/ModalFilter'

const Home = (props) => {

	const [data, setData] = useState([])
	const [location, setLocation] = useState('LA')
	const [price, setPrice] = useState(1)
	const [category, setCategory] = useState("Food")
	//const [sortBy, setSortBy] = useState("best_match")
	const [radius, setRadius] = useState(8000)
	console.log(radius)
	useEffect(() => {
		getbusinesses(location, price, category, radius)
			.then(res => {
				console.log(res.data.businesses)
				setData(res.data.businesses)
			})
			.catch((error) => {
				console.log(error);
			});

	}, [location, price, category, radius])

	// const { msgAlert, user } = props
	console.log('props in home', props)
	console.log("Location", location)
	return (
		<>
			<p className='homeTitle'>What do you want to eat?</p>
			<Carousel data={data} />
			
			<Navbar 
				location={location}
				setLocation={setLocation}
				price={price}
				setPrice={setPrice}
				category={category}
				setCategory={setCategory}
				//sortBy={sortBy}
				//setSortBy={setSortBy}
				radius={radius}
				setRadius={setRadius}
			/>
		</>
	)
}

export default Home
