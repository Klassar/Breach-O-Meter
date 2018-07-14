function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
      if (xhr.readyState == 4 && xhr.status == 200) { // Check status and readyState
        resolve(xhr.response); // Resolve the promise with the response text
      }
      else {
        reject(Error(xhr.statusText)); // Regect with status text error otherwise
      }
    };
    xhr.onerror = function() {
      reject(Error("Network Error")); // Handle network errors
    };
    xhr.send();
  });
}


get('http://localhost:3000/ws/breaches?index=500').then(function(response) {
	let logo; // Stores new iteration of logo lookup
	let site; // Stores new iteration of domain lookup
	let dateMsec; // Stores new iteration of date lookup
	let breachNum; // Stores new iteration of number lookup

	// Parse incoming data to JSON
  return JSON.parse(response);

}).then(function(response) {
	for (let i = 0; i < response.result.length; i++) {
		// loops through JSON data/stores values in respective variables
		site = response.result[i].site;
		dateMsec = response.result[i].date;
		breachNum = response.result[i].number;

		// IIFE receives 'site' variable/performs ajax req to lookup corresponding icon/returns to logo variable
		(function retrieveLogo(siteName) {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var res = JSON.parse(this.responseText);
					logo = res.result;
					}
				}
			xhr.open("GET", "http://localhost:3000/ws/icon?site=" + siteName, false);
			xhr.send();
		})(site);

		// Build HTML to display each iteration of data
		const buildData =
				'<div class="dataItem">' +
					'<div class="dataItem-info">' +
						"<img src='" + logo + "'/>" +
						'<h4>' + site + '</h4>' +
						'<h5>' + moment(dateMsec).format('M/DD/YYYY') + '</h5>' +
					'</div>' +
					'<div class="dataItem-digit">' +
						'<p>' + breachNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</p>' +
					'</div>' +
				'</div>';

		document.getElementById("content").innerHTML += buildData; // Append HTML to DOM
	}
}).catch(function(error) {
  console.error("Error!", error);
})



