function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('1wKGlPyfMfrk9Ck1oo5AF2Ge3pDGs-bQC1va1LogkGwY').getActiveSheet();
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 7).setValues([
        ['Timestamp', 'Full Name', 'Company', 'Industry', 'Email', 'Phone', 'Message']
      ]);
    }
    
    // Get form data
    const timestamp = e.parameter.timestamp || new Date().toLocaleString();
    const fullName = e.parameter.fullName || '';
    const company = e.parameter.company || '';
    const industry = e.parameter.industry || '';
    const email = e.parameter.email || '';
    const phone = e.parameter.phone || 'Not provided';
    const message = e.parameter.message || '';
    
    // Add the form data
    sheet.appendRow([timestamp, fullName, company, industry, email, phone, message]);
    
    return ContentService
      .createTextOutput('Success')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    return ContentService
      .createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}