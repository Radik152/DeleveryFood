const restorant = 'food-band';

const renderItems = (data) => {
    console.log(data)
}

fetch(`./db/${restorant}.json`)
    .then((response) => response.json())
    .then((data)=> {
        renderItems(data);
    })
    .catch((error) => {
        console.log(error);
    })