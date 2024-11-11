// script.js

document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.querySelector('.date');
    const submitButton = document.getElementById('submit');
    const ageDisplay = document.getElementById('age');

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        // If birth month is greater than current month, or birth date is greater than current date
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    };

    submitButton.addEventListener('click', () => {
        const dob = dateInput.value;
        if (dob) {
            const age = calculateAge(dob);
            ageDisplay.textContent = age;
        } else {
            ageDisplay.textContent = 'Please enter your date of birth';
        }
    });
});
