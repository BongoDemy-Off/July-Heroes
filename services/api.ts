import { APP_SCRIPT_URL } from '../constants';
import { HeroData, ApiResponse } from '../types';

/**
 * Fetches the list of heroes from the Google Sheet
 * Expects the GAS script to handle GET requests.
 */
export const fetchHeroes = async (): Promise<HeroData[]> => {
  if (APP_SCRIPT_URL.includes('XXXXXXXXXXXX')) {
    console.warn("API URL not configured. Returning empty array.");
    return [];
  }

  try {
    const response = await fetch(APP_SCRIPT_URL, {
      method: 'GET',
    });
    
    if (!response.ok) throw new Error('Network response was not ok');
    
    const result: ApiResponse = await response.json();
    if (result.success && result.data) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

/**
 * Submits a new hero entry to the Google Sheet
 */
export const submitHero = async (data: HeroData): Promise<ApiResponse> => {
  if (APP_SCRIPT_URL.includes('XXXXXXXXXXXX')) {
    // Simulate success for demo purposes if no URL provided
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'API URL not set, but simulated success.' });
      }, 1500);
    });
  }

  // Google Apps Script Web Apps often require 'no-cors' for simple POSTs from browser due to strict CORS.
  // However, 'no-cors' makes the response opaque. 
  // Ideally, the GAS script should return correct CORS headers.
  // We will try standard POST first.
  try {
    const response = await fetch(APP_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      // We use text/plain to avoid preflight OPTIONS request if the server doesn't handle it well,
      // but GAS usually handles JSON content type if set up correctly. 
      // Let's stick to standard practice; if it fails, the user needs to check GAS code.
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting data:", error);
    return { success: false, message: 'Network error occurred.' };
  }
};