const upskillBtn = document.getElementById('upskillBtn');
const findJobBtn = document.getElementById('findJobBtn');
const optionsContainer = document.querySelector('.options-container');
const professionBtn = document.querySelector('.profession-btn');
const levelBtn = document.querySelector('.level-btn');
const professionSelect = document.querySelector('.profession-select');
const levelSelect = document.querySelector('.level-select');

const professions = [
    'Software Developer', 'Data Scientist', 'UX Designer', 'Product Manager',
    'Digital Marketer', 'Cybersecurity Analyst', 'Cloud Architect',
    'AI Engineer', 'Business Analyst', 'DevOps Engineer'
];

upskillBtn.addEventListener('click', function(e) {
    e.preventDefault();
    findJobBtn.style.display = 'none';
    upskillBtn.style.margin = '0 auto';
    optionsContainer.style.display = 'flex';
});

function toggleOption(btn, select) {
    const icon = btn.querySelector('i');
    const span = btn.querySelector('span');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
    select.style.display = select.style.display === 'none' ? 'block' : 'none';
    
    if (select.style.display === 'block') {
        select.focus();
    }
}

function updateButtonText(btn, select) {
    const span = btn.querySelector('span');
    span.textContent = select.options[select.selectedIndex].text;
}

professionBtn.addEventListener('click', function() {
    toggleOption(professionBtn, professionSelect);
});

levelBtn.addEventListener('click', function() {
    toggleOption(levelBtn, levelSelect);
});

professionSelect.addEventListener('change', function() {
    updateButtonText(professionBtn, professionSelect);
    toggleOption(professionBtn, professionSelect);
});

levelSelect.addEventListener('change', function() {
    updateButtonText(levelBtn, levelSelect);
    toggleOption(levelBtn, levelSelect);
});

// Populate profession options
professions.forEach(profession => {
    const option = document.createElement('option');
    option.value = profession.toLowerCase().replace(/\s+/g, '-');
    option.textContent = profession;
    professionSelect.appendChild(option);
});