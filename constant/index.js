export const BASE_API_URL = 'https://api.smesummit.id'

export const API_ENDPOINT = {
  CAPTCHA_IMAGE: (token) => `${BASE_API_URL}/captcha.php?token=${token}`,
  REGISTER_PARTICIPANT: `${BASE_API_URL}/participant_register.php`,
  REGISTER_SPONSOR: `${BASE_API_URL}/sponsor_register.php`,
  REGISTER_VOLUNTEER: `${BASE_API_URL}/volunteer_register.php`,
  REGISTER_COACHER: `${BASE_API_URL}/coacher_register.php`,
  REGISTER_SPEAKER: `${BASE_API_URL}/speaker_register.php`
}

export const SPEAKERS = [{
  name: 'Ken Ratri Iswari',
  title: 'Founder & CEO Geekhunter',
  sector: 'Human Asset Sector',
  fb: 'https://www.facebook.com/kenratriiswari',
  tw: 'https://twitter.com/kenratriiswari',
  in: 'https://www.linkedin.com/in/kenratriiswari/',
  insta: 'https://www.instagram.com/kenratriiswari/',
  photo: {
    jpeg: '/images/speaker/ken-ratri-iswari.jpeg',
    webp: '/images/speaker/ken-ratri-iswari.webp'
  }
}, {
  name: 'Rendy Maulana',
  title: 'CEO of Qwords',
  sector: 'Regulation Sector',
  fb: 'https://www.facebook.com/rendy.maulana',
  tw: '',
  in: 'https://www.linkedin.com/in/rendy/',
  insta: 'https://www.instagram.com/rendy/',
  photo: {
    jpeg: '/images/speaker/rendy-maulana.jpeg'
  }
}, {
  name: 'Awesome Speaker',
  title: 'Awesome Company',
  sector: 'Technology Sector',
  fb: 'https://www.facebook.com/',
  tw: 'https://twitter.com/',
  in: 'https://www.linkedin.com/in/',
  insta: 'https://www.instagram.com/',
  photo: {
    jpeg: '/images/person.png'
  }
}, {
  name: 'Awesome Speaker',
  title: 'Awesome Company',
  sector: 'Financial Sector',
  fb: 'https://www.facebook.com/',
  tw: 'https://twitter.com/',
  in: 'https://www.linkedin.com/in/',
  insta: 'https://www.instagram.com/',
  photo: {
    jpeg: '/images/person.png'
  }
}, {
  name: 'Awesome Speaker',
  title: 'Awesome Company',
  sector: 'Marketing Sector',
  fb: 'https://www.facebook.com/',
  tw: 'https://twitter.com/',
  in: 'https://www.linkedin.com/in/',
  insta: 'https://www.instagram.com/',
  photo: {
    jpeg: '/images/person.png'
  }
}]

export const ABOUT_DESC = `SME Summit 2019 is a conference and mentoring panel session organized by PHP Indonesia which aims to help the technological transformation in non-tech companies, small and medium enterprises and traditional companies, shift the paradigm that IT division is only as a support division in the company into a profit-center division and helping to transform your stagnant companies into exponential growth companies`
