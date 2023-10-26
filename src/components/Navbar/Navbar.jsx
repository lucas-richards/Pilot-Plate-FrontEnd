import { Link } from 'react-router-dom'
import './Navbar.css'
import ModalFilter from '../../components/shared/ModalFilter'

const authenticatedOptions = (
		
    <Link to='sign-out' className='navLink' >
        <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        height="2em"
        width="2em"
        >
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
    </Link>
		
)

const unauthenticatedOptions = (
	
    <Link to='sign-in'className='navLink' >
        <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="2em"
            width="2em"
            >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
    </Link>
	
)


export default function Navbar({
	location,
	setLocation,
	price,
	setPrice,
	category,
	setCategory,
	radius,
	setRadius,
    user
}) {
    return (
        
        
        <ul className='navb'>
            <li>
                
            <ModalFilter
				location={location}
				setLocation={setLocation}
				price={price}
				setPrice={setPrice}
				category={category}
				setCategory={setCategory}
				radius={radius}
				setRadius={setRadius}
			/>
                
            </li>
            <li>
                <Link to='/' className='navLink'>
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="2em"
					    width="2em"
                        >
                        <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                    </svg>
                </Link>
            </li>
            <li>
                <Link to='#' className='navLink'>
                    <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
					width="2em"
                    >
                    <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
                    </svg>
                </Link>
            </li>
            <li>
                {user ? authenticatedOptions : unauthenticatedOptions}
            </li>
        </ul>
        
    )
}