var studentSpreadsheet = SpreadsheetApp.openById("1c5Tvi0hvSbrYQhZGgQN9nJAsdQZtM7R-dnVS4gVuuTM");
var log = SpreadsheetApp.openById("1_MWdF2aE1EhiqdOAivT2EUZFqVrq73pgDoUrOoH_x3k");

function include(file){
  return HtmlService.createTemplateFromFile(file)
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .getContent();
}

function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function doSubmit(message) {
  var student = getStudent(message['sid']);
  if(!student) return false;
   var status = 'a';
   message.first = student[1]; //Object.keys(student).map(function(k) {return student[k] } );
   message.last = student[2];
   message.grade = student[3];
   message.team = student[4];
  switch(message['mode']){
    case 'signin':
    //if sign in
        status = logStudent(message);
        

    //validate:
    // student exists
    // student is not already signed in
    // seat is not already occupied

    //put into spreadsheet
    //prepare message
      break;
    case 'signout':
    //if sign out
    //validate
    // student exists
    // student is currently signed in
  
    //put into spreadsheet
    //prepare message
      break;
    default:
      break;  
  }
  return status;
}

function getStudent(id) {
  var students = studentSpreadsheet.getDataRange().getValues();
  var row;
  var found;
  for(i in students) {
    row = students[i];
    if(row[0] == id) {
      found = true;
      break;
    }
  }
  if(found) {
    return row;
  } else return false;
}

function logStudent(o){
  var arr = Object.keys(o).map(function(k) {return o[k] } );
  log.getSheetByName('Log').appendRow(arr)
  return 'success' + arr;
}

function addActive(){
}

function checkActive(sid){
}

function getActive(){
}

function writeLog() {
}