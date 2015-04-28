var studentSpreadsheet = SpreadsheetApp.openById("1c5Tvi0hvSbrYQhZGgQN9nJAsdQZtM7R-dnVS4gVuuTM");

function doGet() {
  var output = HtmlService.createHtmlOutputFromFile('index');
  output.append(HtmlService.createHtmlOutputFromFile('ribbon').getContent());
  output.append(HtmlService.createHtmlOutputFromFile('map').getContent());
  output.append(HtmlService.createHtmlOutputFromFile('generator-handler').getContent());
  output.append('</div>');
  return output;
}

function doSubmit(message) {
  //if sign in
  //validate:
  // student exists
  // student is not already signed in
  // seat is not already occupied

  //put into spreadsheet
  //prepare message
  
  //if sign out
  //validate
  // student exists
  // student is currently signed in
  
  //put into spreadsheet
  //prepare message
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
  } else return "SID not in database";
}

function addActive(){
}

function checkActive(sid){
}

function getActive(){
}

function writeLog() {
}