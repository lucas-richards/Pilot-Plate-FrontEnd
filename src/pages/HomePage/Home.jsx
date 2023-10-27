import Carousel from '../../components/Carousel/Carousel'
import './Home.css'

const Home = (props) => {

	const { data, user} = props
	
	return (
		<div className="homeContainer">
			<p className='homeTitle'>What do you want to eat?</p>
			<Carousel 
				data={data}
				user={user} />
		</div>
	)
}

export default Home
