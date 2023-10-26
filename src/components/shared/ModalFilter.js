import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./ModalFilter.css";

function ModalFilter({
	location,
	setLocation,
	price,
	setPrice,
	category,
	setCategory,
	sortBy,
	setSortBy,
	radius,
	setRadius,
	setTransactions,
	setRating,
}) {
	const [show, setShow] = useState(false);
	const [locationValue, setLocationValue] = useState(location);
	const [priceValue, setPriceValue] = useState(price);
	const [categoryValue, setCategoryValue] = useState(category);
	const [radiusValue, setRadiusValue] = useState(Math.floor(radius * 0.000621371))
	//const [sortValue, setSortValue] = useState(sortBy)
	//const [deliveryChecked, setDeliveryChecked] = useState(false);
	//const [takeoutChecked, setTakeoutChecked] = useState(false);
	//const [ratingValue, setRatingValue] = useState(0);

	const handleClose = () => {
		setShow(false) // close the model
	};

	const handleApply = () => {

		// const transactions = [];
		// if (deliveryChecked) {
		// 	transactions.push("delivery");
		// }
		// if (takeoutChecked) {
		// 	transactions.push("takeout");
		// }

		setLocation(locationValue) //set the location
		setPrice(priceValue) //set the price
		setCategory(categoryValue)
		//setSortBy(sortValue)
		setRadius( (radiusValue * 1609.344).toFixed(0) ) 

		setShow(false) //close the model
	}

	const handleShow = () => setShow(true);

	return (
		<>
			
				<Button onClick={handleShow} variant="" >
					<svg
						fill="currentColor"
						viewBox="0 0 16 16"
						height="2em"
						width="2em"
						
						>
						<path d="M6 10.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" />
					</svg>
				</Button>
			

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title className="modal-title">Filter Restaurants</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group controlId="formLocation">
						<Form.Label className="form-label">Location</Form.Label>
						<Form.Control
							className="form-control"
							type="text"
							placeholder="Enter current zip code"
							value={locationValue}
							onChange={(e) => setLocationValue(e.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="formPrice">
						<Form.Label className="form-label">Price: ${priceValue}</Form.Label>
						<Form.Control
							type="range"
							min={1}
							max={4}
							className="form-control"
							value={priceValue}
							onChange={(e) => setPriceValue(parseInt(e.target.value))}
						/>
					</Form.Group>
					<Form.Group controlId="formCategory">
						<Form.Label className="form-label">Category</Form.Label>
						<Form.Control
							className="form-control"
							type="text"
							placeholder="Coffee, Desserts, Mexican, etc"
							value={categoryValue}
							onChange={(e) => setCategoryValue(e.target.value)}
						/>
					</Form.Group>
					{/* <Form.Group controlId="formTransactions">
						<Form.Check
							type="checkbox"
							id="deliveryCheckbox"
							label="Delivery"
							className="checkbox-label"
							checked={deliveryChecked}
							onChange={() => setDeliveryChecked(!deliveryChecked)}
						/>
						<Form.Check
							type="checkbox"
							id="takeoutCheckbox"
							label="Takeout"
							className="checkbox-label"
							checked={takeoutChecked}
							onChange={() => setTakeoutChecked(!takeoutChecked)}
						/>
					</Form.Group> */}
					<Form.Group controlId="formRadius">
						<Form.Label className="form-label">Distance: {radiusValue} miles</Form.Label>
						<Form.Control
							type="range"
							min={1}
							max={24}
							className="form-control"
							value={radiusValue}
							onChange={(e) => setRadiusValue(parseInt(e.target.value))}
						/>
					</Form.Group>
					{/* <Form.Group controlId="formRating">
						<Form.Label className="form-label">Sort</Form.Label>
						<Form.Select aria-label="Default select example">
							<option value="best_match">Default</option>
							<option value="rating">Yelp Rating</option>
							<option value="review_count">Review Count</option>
							<option value="distance">Distance</option>
						</Form.Select>
					</Form.Group> */}
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						className="button-secondary"
						onClick={handleClose}>
						Close
					</Button>
					<Button
						variant="primary"
						className="button-primary"
						onClick={handleApply}>
						Apply Filters
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ModalFilter;
