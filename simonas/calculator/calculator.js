document.addEventListener('DOMContentLoaded', function () {
  const dayInput = document.getElementById('day');
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');
  const form = document.querySelector('.age_calculator--form');

  const ageRezNumbers = document.querySelectorAll('.age_rez--number');

  function calculateAge() {
    const dayValue = parseInt(dayInput.value, 10);
    const monthValue = parseInt(monthInput.value, 10);
    const yearValue = parseInt(yearInput.value, 10);

    const validDay = dayValue >= 1 && dayValue <= 31 && !isNaN(dayValue);
    const validMonth =
      monthValue >= 1 && monthValue <= 12 && !isNaN(monthValue);
    const validYear =
      yearValue >= 1900 &&
      yearValue <= new Date().getFullYear() &&
      !isNaN(yearValue);

    setError(dayInput, !validDay, document.getElementById('day-error-message'));
    setError(
      monthInput,
      !validMonth,
      document.getElementById('month-error-message')
    );
    setError(
      yearInput,
      !validYear,
      document.getElementById('year-error-message')
    );

    if (validDay && validMonth && validYear) {
      calculateAgeResult(dayValue, monthValue, yearValue);
    } else {
      resetAgeResults();
    }
  }

  function setError(input, isError, errorMessageElement) {
    if (isError) {
      input.classList.add('error');
      errorMessageElement.textContent = 'Invalid input';
      errorMessageElement.style.color = 'red';
    } else {
      input.classList.remove('error');
      errorMessageElement.textContent = '';
    }
  }

  function calculateAgeResult(day, month, year) {
    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;

    const years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(
      ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.44)
    );
    const days = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

    ageRezNumbers[0].textContent = years;
    ageRezNumbers[1].textContent = months;
    ageRezNumbers[2].textContent = days;
  }

  function resetAgeResults() {
    ageRezNumbers.forEach((number) => (number.textContent = '- -'));
  }

  form.addEventListener('input', calculateAge);
});
