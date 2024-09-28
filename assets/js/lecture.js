document.addEventListener('DOMContentLoaded', function() {
    const courseContainer = document.querySelector('.course-container');
    const courseContent = document.querySelector('.course-content');
    const sidebar = document.getElementById('course-sidebar');
    const toggleBtn = document.getElementById('toggle-content');
    const closeBtn = document.getElementById('close-sidebar');
    const video = document.getElementById('lecture-video');
    const sections = document.querySelectorAll('.section h3');
    const lessons = document.querySelectorAll('.section li');

    function toggleSidebar() {
        sidebar.classList.toggle('open');
        courseContainer.classList.toggle('sidebar-open');
        
        if (sidebar.classList.contains('open')) {
            if (window.innerWidth > 768) {
                courseContent.style.width = 'calc(100% - 400px)';
            }
        } else {
            courseContent.style.width = '100%';
        }
    }

    toggleBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);

    sections.forEach(section => {
        section.addEventListener('click', () => {
            section.parentElement.classList.toggle('active');
        });
    });

    lessons.forEach(lesson => {
        lesson.addEventListener('click', () => {
            const lessonTitle = lesson.querySelector('.lesson-title').textContent;
            // Simulate changing the video source when a lesson is clicked
            video.src = `../assets/videos/${lessonTitle.trim().replace(/\s+/g, '-').toLowerCase()}.mp4`;
            video.play();
            
            // Update checkbox
            const checkbox = lesson.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            
            // Update progress
            updateProgress();
        });
    });

    function updateProgress() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const totalLessons = section.querySelectorAll('li').length;
            const completedLessons = section.querySelectorAll('input[type="checkbox"]:checked').length;
            const progressSpan = section.querySelector('h3 span');
            progressSpan.textContent = `${completedLessons}/${totalLessons} | ${progressSpan.textContent.split('|')[1].trim()}`;
        });
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            courseContent.style.width = '100%';
        } else if (sidebar.classList.contains('open')) {
            courseContent.style.width = 'calc(100% - 400px)';
        }
    });
});