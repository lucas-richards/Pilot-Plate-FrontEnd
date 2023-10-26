import Carousel from '../../components/Carousel/Carousel'
import './Home.css'

const Home = (props) => {

	const { data} = props
	
	return (
		<>
			<p className='homeTitle'>What do you want to eat?</p>
			<Carousel data={data} />
		</>
	)
}

export default Home
