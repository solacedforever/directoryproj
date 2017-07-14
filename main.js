for(i = 0; i < customers.results.length; i++){
const temp = `
  <div id="profile">
    <img src=${customers.results[i].picture.large}>
    <h2>${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
    <div class="email"><a href="email">${customers.results[i].email}</a></div>
    </br>
    <div class="info">${customers.results[i].location.street}</div>
    <div class="info">${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}</div>
    <div class="info">${customers.results[i].phone}</div>
    </br>
    <div class="ss">${customers.results[i].id.value}</div>
  </div>
`;

document.querySelector('.container1').innerHTML += temp;
    console.log(customers.results[i]);
}
