import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./ModalFilter.css";

function ModalFilter({
	setLocation,
	setPrice,
	setCategory,
	setTransactions,
	setRating,
}) {
	const [show, setShow] = useState(false);
	const [locationValue, setLocationValue] = useState("");
	const [priceValue, setPriceValue] = useState(0);
	const [categoryValue, setCategoryValue] = useState("");
	const [deliveryChecked, setDeliveryChecked] = useState(false);
	const [takeoutChecked, setTakeoutChecked] = useState(false);
	const [ratingValue, setRatingValue] = useState(0);

	const handleClose = () => {
		const transactions = [];
		if (deliveryChecked) {
			transactions.push("delivery");
		}
		if (takeoutChecked) {
			transactions.push("takeout");
		}
		setTransactions(transactions);
		setPrice(priceValue);
		setRating(ratingValue);
		setShow(false);
	};

	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Filters
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
							min={0}
							max={100}
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
					<Form.Group controlId="formTransactions">
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
					</Form.Group>
					<Form.Group controlId="formRating">
						<Form.Label className="form-label">Yelp Rating</Form.Label>
						<div className="rating-slider">
							<input
								type="range"
								min={1}
								max={5}
								list="rating-options"
								className="form-control"
								value={ratingValue}
								onChange={(e) => setRatingValue(parseInt(e.target.value))}
							/>
							<datalist id="rating-options">
								<option value="1" label="1 Star" />
								<option value="2" label="2 Stars" />
								<option value="3" label="3 Stars" />
								<option value="4" label="4 Stars" />
								<option value="5" label="5 Stars" />
							</datalist>
							<div className="rating-value">{ratingValue} Stars</div>
						</div>
					</Form.Group>
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
						onClick={handleClose}>
						Apply Filters
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ModalFilter;
