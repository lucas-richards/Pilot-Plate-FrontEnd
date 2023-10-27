import { getAllBusinesses } from "../../api/business"


export default function FavoriteBusiness({ data, msgAlert, user, spin }) {
    
    cont [businesses,setBusinesses]

    useEffect(()=>{
        getAllBusinesses()
            .then((businesses)=>{
                setBusinesses(data.businesses)
            })
    })

    

    return(
        <h1>businesses</h1>
    )
}