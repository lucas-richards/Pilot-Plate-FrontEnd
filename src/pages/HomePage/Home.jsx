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

	useEffect(()=>{
		getbusinesses(location, price)
			.then(res=>{
				console.log(res.data.businesses)
				setData(res.data.businesses)
			})
			.catch((error) => {
				console.log(error); 
			});
	},[location,price])
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<p className='homeTitle'>What do you want to eat?</p>
			<Carousel data={data} />
			<ModalFilter 
				setLocation={setLocation}
				setPrice={setPrice}
			/>
			<Navbar />
		</>
	)
}

export default Home
