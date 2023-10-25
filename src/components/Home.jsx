import Carousel from './Carousel/Carousel'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>
			<Carousel />
		</>
	)
}

export default Home
