window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionAPIUrl = "https://getresumecountertlemarte.azurewebsites.net/api/GetResumeCounter?code=ZHoTCdToMjtwkulnuEqxQVRl8M5pSUsS6zMuByfvBGV7RBNsUceDYQ=="
const localFunctionAPI = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 0;
    fetch(functionAPIUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}