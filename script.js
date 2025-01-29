// Greeting Based on Time of Day
const greetingElement = document.getElementById('greeting');
const updateGreeting = () => {
  const now = new Date();
  const hours = now.getHours();
  let greeting = 'Good Evening!';
  if (hours < 12) greeting = 'Good Morning!';
  else if (hours < 18) greeting = 'Good Afternoon!';
  greetingElement.textContent = greeting;
};
updateGreeting();

// Toggle Bio Visibility
const toggleBioButton = document.getElementById('toggleBio');
const shortBio = document.getElementById('shortBio');
toggleBioButton.addEventListener('click', () => {
  shortBio.style.display = shortBio.style.display === 'none' ? 'block' : 'none';
});

// Profile Picture Uploader
const uploadPictureInput = document.getElementById('uploadPicture');
const profilePicture = document.getElementById('profilePicture');
uploadPictureInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePicture.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});

// Email Copy Functionality
const emailElement = document.getElementById('emailCopy');
emailElement.addEventListener('click', () => {
  const email = emailElement.textContent;
  navigator.clipboard.writeText(email).then(() => {
    alert('Email copied to clipboard!');
  });
});

const weatherElement = document.getElementById('weather');
fetch('https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=622f9feb6a5b663e86ba2677a4d0b7b6')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    const temperature = (data.main.temp - 273.15).toFixed(1);
    const description = data.weather[0].description;
    weatherElement.textContent = `Weather: ${temperature}°C, ${description}`;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    weatherElement.textContent = 'Unable to fetch weather.';
  });


// Birthday Countdown
const birthdayCountdown = document.getElementById('birthdayCountdown');
const birthday = new Date('2025-03-15');
const updateCountdown = () => {
  const now = new Date();
  const nextBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
  if (now > nextBirthday) nextBirthday.setFullYear(now.getFullYear() + 1);
  const daysLeft = Math.ceil((nextBirthday - now) / (1000 * 60 * 60 * 24));
  birthdayCountdown.textContent = `Days to Birthday: ${daysLeft}`;
};
updateCountdown();

// Toggle Theme Switch
const themeSwitcher = document.getElementById('themeSwitcher');
const themeLabel = document.getElementById('themeLabel');

themeSwitcher.addEventListener('change', () => {
  const isDarkMode = themeSwitcher.checked;
  document.body.classList.toggle('dark-theme', isDarkMode);
  themeLabel.textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
});

