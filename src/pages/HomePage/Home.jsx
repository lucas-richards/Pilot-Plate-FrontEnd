import Carousel from '../../components/Carousel/Carousel'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<p className='homeTitle'>What do you want to eat?</p>
			<Carousel />
			<Navbar />
		</>
	)
}

export default Home
