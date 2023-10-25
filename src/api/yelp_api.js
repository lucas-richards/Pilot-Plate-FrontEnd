

export const getbusinesses = async (location) => {
    const apiUrl = `https://api.yelp.com/v3/businesses/search?location=${location}`;
    const headers = {
      'Authorization': process.env.REACT_APP_X_YelpAPI_Key,
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('this is res.data', data.url);
      return data.url;
    } catch (error) {
      throw error; // Rethrow the error
    }
  };