const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];


const dob = document.getElementById('dob');
const cd = document.getElementById('country');
const gender = document.getElementsByName('Gender');
const courses = document.getElementsByName('course')
const hobbies = document.getElementsByName('hobbies');
const form = document.getElementById('form')

//every created node below

const date = document.createElement("select");
const month = document.createElement("select");
const year = document.createElement("select");
const country = document.createElement("select");


country.style.width = "40%";
country.style.height = "5vh";
country.style.borderRadius = "1vh";


//list of all the countries in the world


//for date dropdown 

for (let i=0; i <= 31; i += 1) {

    let option_date = document.createElement("option");

	date.setAttribute("id","date");
	date.setAttribute("required","");
	
    let number = document.createTextNode(i);
    option_date.appendChild(number);
    date.appendChild(option_date);
	
	if(i==0){
		option_date.innerText ="Date"
		option_date.setAttribute("value","");
	}

}

//for month dropdown 

const array = ["Month","January","February", "March", "April", "May", "June","July","August","September","October","November","December"];

for (let j=0; j < array.length; j += 1) { 
	// array[0] = "Month";  
	let option_month = document.createElement("option");
	
    let month_val = document.createTextNode(array[j]);
    option_month.appendChild(month_val);
    month.appendChild(option_month);
	
	
	month.setAttribute("id","month");
	month.setAttribute("required","")
	
	if(j==0){
		option_month.setAttribute("value","")
	}
}

//for year dropdown

for (let i=1947; i <= 2016; i += 1) {
    let option_year = document.createElement("option");
    let year_val = document.createTextNode(i);

	year.setAttribute("id","year");

    option_year.appendChild(year_val);
    year.appendChild(option_year);
	year.setAttribute("required","")

	if(i==1947){
		option_year.innerText="Year";
		option_year.setAttribute("value","");
	}
}

//country dropdown

for (let j=0; j < countryList.length; j += 1) {   
    let option_country = document.createElement("option");
    let country_val = document.createTextNode(countryList[j]);

	country.setAttribute("id","staticCountry")

    option_country.appendChild(country_val);
    country.appendChild(option_country);
}


//appending dropdwon elements to the parent divs.


dob.appendChild(date);
dob.appendChild(month);
dob.appendChild(year);
cd.appendChild(country);



function passValue() {

	//fetching all the input values

    const firstName = document.getElementById('staticFName').value;
    const lastName = document.getElementById('staticLName').value;
    const dateobirth = document.getElementById('date').value;
    const monthobirth = document.getElementById('month').value;
	const yearobirth = document.getElementById("year").value;
	const email = document.getElementById('staticEmail').value;
	const number = document.getElementById('staticNumber').value;
	const address = document.getElementById('staticAddress').value
	const city = document.getElementById('staticCity').value;
	const state = document.getElementById('staticState').value;
	const pincode = document.getElementById('staticCode').value;
	const country = document.getElementById('staticCountry').value;
	const hobbies_input = document.getElementById('hobbies').value;
	const board_input1 = document.getElementById('board1').value;
	const board_input2 = document.getElementById('board2').value;
	const board_input3 = document.getElementById('board3').value;
	const board_input4 = document.getElementById('board4').value;

	const board1_perc = document.getElementById('board1_perc').value;
	const board2_perc = document.getElementById('board2_perc').value;
	const board3_perc = document.getElementById('board3_perc').value;
	const board4_perc = document.getElementById('board4_perc').value;

	const pass_year1 = document.getElementById('pass_year1').value;
	const pass_year2 = document.getElementById('pass_year2').value;
	const pass_year3 = document.getElementById('pass_year3').value;
	const pass_year4 = document.getElementById('pass_year4').value;


	//storing all the values in localStorage


    localStorage.setItem("firstName",firstName);
    localStorage.setItem("lastName",lastName);
    localStorage.setItem("date",dateobirth);
	localStorage.setItem("month",monthobirth);
	localStorage.setItem("year",yearobirth);
	localStorage.setItem("email",email);
	localStorage.setItem("number",number);
	localStorage.setItem("address",address);
	localStorage.setItem("city",city);
	localStorage.setItem("state",state);
	localStorage.setItem("pin",pincode);
	localStorage.setItem("country",country);

	localStorage.setItem("hobbies_input",hobbies_input);


	localStorage.setItem("board1",board_input1);
	localStorage.setItem("board2",board_input2);
	localStorage.setItem("board3",board_input3);
	localStorage.setItem("board4",board_input4);


	localStorage.setItem("board1_perc",board1_perc);
	localStorage.setItem("board2_perc",board2_perc);
	localStorage.setItem("board3_perc",board3_perc);
	localStorage.setItem("board4_perc",board4_perc);

	localStorage.setItem("pass_year1",pass_year1);
	localStorage.setItem("pass_year2",pass_year2);
	localStorage.setItem("pass_year3",pass_year3);
	localStorage.setItem("pass_year4",pass_year4);

	
	// for gender input value 

	let gender_chosen;
	for(let i = 0; i < gender.length; i++){
		if(gender[i].checked){
			gender_chosen = gender[i].value;
			break;
		}
	}

	localStorage.setItem("gender",gender_chosen);


	// for courses input value

	let course_choosen;
	for (let j = 0; j < array.length; j++) {
		if(courses[j].checked){
			course_choosen = courses[j].value;
			break;
		}
		
	}
	localStorage.setItem("course",course_choosen)

	//for hobbies checkbox value

	let user_hobbies1;
	let user_hobbies2;
	let user_hobbies3;
	let user_hobbies4;
	if(hobbies[0].checked){
		user_hobbies1 = hobbies[0].value;
		localStorage.setItem('hobby1',user_hobbies1);
		// console.log(user_hobbies);
	}		
	else{
		user_hobbies1 = "";
		localStorage.setItem('hobby1',user_hobbies1);
	}
	if(hobbies[1].checked){
		user_hobbies2 = hobbies[1].value;
		localStorage.setItem('hobby2',user_hobbies2);
	}
	else{
		user_hobbies2 = "";
		localStorage.setItem('hobby2',user_hobbies2);
	}
	if(hobbies[2].checked){
		user_hobbies3 = hobbies[2].value;
		localStorage.setItem('hobby3',user_hobbies3);
	}
	else{
		user_hobbies3 = "";
		localStorage.setItem('hobby3',user_hobbies3);
	}
	if(hobbies[3].checked){
		user_hobbies4 = hobbies[3].value;
		localStorage.setItem('hobby4',user_hobbies4);
	}
	else{
		user_hobbies4 = "";
		localStorage.setItem('hobby4',user_hobbies4);
	}


	window.alert("Are you sure you want to Submit");


	form.submit();
	form.reset();

}