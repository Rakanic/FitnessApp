export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a1a016711emsh53cbc5fe279f9e8p16a166jsn42995d13fab6',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
  };


export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json()

    return data;
}