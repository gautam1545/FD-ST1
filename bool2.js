let Name = document.getElementById("h1");
let dob = document.getElementById("h2");
let email = document.getElementById("h3");
let number = document.getElementById("h4");
let address = document.getElementById("h5");
let gender = document.getElementById("hg");
let course = document.getElementById("hc");
let country = document.getElementById("h6");
let hobbies = document.getElementById("h7");
let board1 = document.getElementById("board1");
let board2 = document.getElementById("board2");
let board3 = document.getElementById("board3");
let board4 = document.getElementById("board4");


let board1_perc = document.getElementById("board1_perc");
let board2_perc = document.getElementById("board2_perc");
let board3_perc = document.getElementById("board3_perc");
let board4_perc = document.getElementById("board4_perc");

let pass_year1 = document.getElementById("pass_year1");
let pass_year2 = document.getElementById("pass_year2");
let pass_year3 = document.getElementById("pass_year3");
let pass_year4 = document.getElementById("pass_year4");


// getting data from local storage


const dateobirth = localStorage.getItem("date");
const monthobirth = localStorage.getItem("month");
const yearobirth = localStorage.getItem("year");
const useremail = localStorage.getItem("email");
const usernumber = localStorage.getItem("number");

//getting address

const useraddress = localStorage.getItem("address");
const usercity = localStorage.getItem("city");
const userpin = localStorage.getItem("pin");
const userstate = localStorage.getItem("state");
const usercountry = localStorage.getItem("country");

//getting gender

const usergender = localStorage.getItem("gender");

//gettting hobbies

const userhobby1 = localStorage.getItem("hobby1");
const userhobby2 = localStorage.getItem("hobby2");
const userhobby3 = localStorage.getItem("hobby3");
const userhobby4 = localStorage.getItem("hobby4");
const userhobby_input = localStorage.getItem("hobbies_input");

//getting board name

const boardinput1 = localStorage.getItem("board1");
const boardinput2 = localStorage.getItem("board2");
const boardinput3 = localStorage.getItem("board3");
const boardinput4 = localStorage.getItem("board4");

// getting board percentage

const board1_per_val = localStorage.getItem("board1_perc")
const board2_per_val = localStorage.getItem("board2_perc")
const board3_per_val = localStorage.getItem("board3_perc")
const board4_per_val = localStorage.getItem("board4_perc")


//getting pass year

const pass_year1_val = localStorage.getItem("pass_year1") 
const pass_year2_val = localStorage.getItem("pass_year2") 
const pass_year3_val = localStorage.getItem("pass_year3") 
const pass_year4_val = localStorage.getItem("pass_year4") 


const user_course = localStorage.getItem("course");

//entering data to different elements

//basic info

Name.append(localStorage.getItem("firstName")+" "+localStorage.getItem("lastName"));
dob.append(dateobirth+" "+monthobirth+","+yearobirth);
email.append(useremail);
number.append(usernumber);

//address

address.append(useraddress+","+usercity+","+userpin+","+userstate);
country.append(usercountry);

//gender

gender.append(usergender);

//hobbies

hobbies.append(userhobby1+" "+userhobby2+" "+userhobby3+" "+userhobby4+" "+userhobby_input)

//board name

board1.append(boardinput1)
board2.append(boardinput2)
board3.append(boardinput3)
board4.append(boardinput4)

//board percentage

board1_perc.append(board1_per_val);
board2_perc.append(board2_per_val);
board3_perc.append(board3_per_val);
board4_perc.append(board4_per_val);

//pass year

pass_year1.append(pass_year1_val);
pass_year2.append(pass_year2_val);
pass_year3.append(pass_year3_val);
pass_year4.append(pass_year4_val);


course.append(user_course)