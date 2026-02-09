// BACKEND CODE: Copy this to script.google.com

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  try {
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Create timestamp
    var timestamp = new Date();
    
    // Append row with new columns
    // Order: Date, Name, District, Story, DriveLink, Status, Profession, Age, Gender, Institution, Incident Date, Cause, Politics
    sheet.appendRow([
      timestamp, 
      data.name, 
      data.district, 
      data.story, 
      data.driveLink, 
      'Pending', // Default status
      data.profession || '',
      data.ageGroup || '',
      data.gender || '',
      data.institution || '',
      data.incidentDate || '',
      data.cause || '',
      data.politicalAffiliation || ''
    ]);
    
    // Return Success JSON
    return ContentService.createTextOutput(JSON.stringify({ 
      'success': true, 
      'message': 'Data saved successfully' 
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return Error JSON
    return ContentService.createTextOutput(JSON.stringify({ 
      'success': false, 
      'message': 'Error: ' + error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Optional: Endpoint to fetch approved heroes
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rows = sheet.getDataRange().getValues();
  // var headers = rows[0]; // Not used currently
  var data = [];
  
  // Start from row 1 (skip header)
  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    // Map row to object
    data.push({
      id: i.toString(),
      createdAt: row[0],
      name: row[1],
      district: row[2],
      story: row[3],
      driveLink: row[4],
      status: row[5] ? row[5].toLowerCase() : 'pending',
      // Map new fields if available in the sheet
      profession: row[6] || '',
      ageGroup: row[7] || '',
      gender: row[8] || '',
      institution: row[9] || '',
      incidentDate: row[10] || '',
      cause: row[11] || '',
      politicalAffiliation: row[12] || ''
    });
  }
  
  return ContentService.createTextOutput(JSON.stringify({
    'success': true,
    'data': data
  })).setMimeType(ContentService.MimeType.JSON);
}

// SETUP INSTRUCTIONS:
// 1. Update your Google Sheet Header Row (Row 1) to match:
//    Timestamp | Name | District | Story | DriveLink | Status | Profession | Age Group | Gender | Institution | Incident Date | Cause | Political Affiliation
// 2. Republish the script as a Web App (Deploy > New Deployment) to ensure changes take effect.
