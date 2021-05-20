const functionAPI = '';

const getVisitCount = () => {
    let count = 0;
    fetch(functionAPI).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    })
}