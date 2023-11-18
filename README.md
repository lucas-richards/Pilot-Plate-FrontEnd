#  Plate Pilot: Hackathon Food App connected to Yelp

This is the frontend and backend for the full stack Plate Pilot App


## Technologies Used

- Express
- MongoDB
- React 
- Node.js


## Planning section


### ERD

<img src="./assets/erd.png" alt="entity relationship diagram">

### Wireframes

<img src="./assets/wireframe1.png" alt="wireframe">
<img src="./assets/wireframe2.png" alt="wireframe">
<img src="./assets/wireframe3.png" alt="wireframe">
<img src="./assets/wireframe4.png" alt="wireframe">


## API

Scripts are included in [`curl-scripts`](curl-scripts) to test built-in actions. Feel free to use Postman for testing, using the curl scripts listed below and in the folder for setting up headers and request bodies.
Add your own scripts to test your custom API.

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

### businesses

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET   | `/businesses`             | `businesses#index`    |
| GET   | `/businesses/<place_id>`    | `businesses#show`    |
| POST   | `/businesses`             | `businesses#create`    |
| PATCH  | `/businesses/<place_id>` | `businesses#update`  |
| DELETE | `/businesses/<place_id>`        | `businesses#delete`   |



#### Recommended Request bodies

Request - users#signup:

```json
{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
}
```

Request - businesses#create (requires a token):

```json
{
    "business": {
        "title": "restaurant name",
        "desc": "this is a business to eat",
        // ...
        
    }
}
```

### Token Auth Strategy

Send the token as `Bearer Token <token>`