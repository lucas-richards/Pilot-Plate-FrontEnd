import apiUrl from '../apiConfig'
import axios from 'axios'

// READ -> Index
export const getAllBusinesses = (dataId) => {
    return axios(`${apiUrl}/businesses/search?dataId=${dataId}`)
}

// READ -> Show
export const getOneBusiness = (id) => {
    return axios(`${apiUrl}/businesses/${id}`)
}

// CREATE -> Add business
export const createBusiness = (user, newBusiness) => {
    return axios({
        url: `${apiUrl}/businesses`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { business: newBusiness,user:user }
    })
}
// UPDATE -> Change business
export const updateBusiness = (user, updatedBusiness) => {
    return axios({
        url: `${apiUrl}/businesses/${updatedBusiness._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { business: updatedBusiness }
    })
}

// DELETE -> Set a business free
export const removeBusiness = (user, businessId) => {
    return axios({
        url: `${apiUrl}/businesses/${businessId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}