'use server'

import { google } from 'googleapis';

export async function getGoogleSheet() {

  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY!.replace("\\n", "\n"),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        range: process.env.GOOGLE_SHEETS_RANGE || '2026!A:E',
    });


   return response.data.values;
  } catch (error) {
    console.error('Error retrieving Google Sheet:', error);
    return null; // Or throw an error if you prefer
  }
}

