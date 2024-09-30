

async function getData(){
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response status : ${response.status}`)
        }

        const json = await response.json()
        console.log(json.results[0]);
        // console.log(json[0]);
        return json
    }catch (error){
        console.error(error.message);
    }
}




getData()
