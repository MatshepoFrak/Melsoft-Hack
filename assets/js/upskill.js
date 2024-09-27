const upskillBtn = document.getElementById('upskillBtn');
const findJobBtn = document.getElementById('findJobBtn');
const optionsContainer = document.querySelector('.options-container');
const professionBtn = document.querySelector('.profession-btn');
const levelBtn = document.querySelector('.level-btn');
const professionSelect = document.querySelector('.profession-select');
const levelSelect = document.querySelector('.level-select');

upskillBtn.addEventListener('click', function(e) {
    e.preventDefault();
    findJobBtn.style.display = 'none';
    upskillBtn.style.margin = '0 auto';
    optionsContainer.style.display = 'flex';
});

function toggleOption(btn, select) {
    const icon = btn.querySelector('i');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
    select.style.display = select.style.display === 'none' ? 'block' : 'none';
}

professionBtn.addEventListener('click', function() {
    toggleOption(professionBtn, professionSelect);
});

levelBtn.addEventListener('click', function() {
    toggleOption(levelBtn, levelSelect);
});