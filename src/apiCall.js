const apiCall = async (query) =>{
    let data;
    await fetch(query)
    .then(response => response.json())
    .then(result => data = result)
    .catch(err => console.error(err))
    return data;
}

module.exports = apiCall;