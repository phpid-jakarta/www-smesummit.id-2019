export const BASE_API_URL = 'https://api.smesummit.id'

export const API_ENDPOINT = {
  CAPTCHA_IMAGE: (token) => `${BASE_API_URL}/captcha.php?token=${token}`,
  REGISTER_PARTICIPANT: `${BASE_API_URL}/participant_register.php`,
  REGISTER_SPONSOR: `${BASE_API_URL}/sponsor_register.php`,
  REGISTER_VOLUNTEER: `${BASE_API_URL}/volunteer_register.php`,
  REGISTER_COACHER: `${BASE_API_URL}/coacher_register.php`,
  REGISTER_SPEAKER: `${BASE_API_URL}/speaker_register.php`
}

export const DESC = {
  TITLE: 'SME Summit 2019',
  TAGLINE: 'DIGITAL TRANSFORMATION FOR NON-TECH COMPANY',
  PLACE_N_DATE: 'Jakarta, 25 April 2019',
  VENUE: 'Ballroom Ayana Hotel Midplaza, Jakarta',
  ABOUT: `SME Summit 2019 is a conference and mentoring panel session organized by PHP Indonesia which aims to help the technological transformation in non-tech companies, small and medium enterprises and traditional companies, shift the paradigm that IT division is only as a support division in the company into a profit-center division and helping to transform your stagnant companies into exponential growth companies.`
}
