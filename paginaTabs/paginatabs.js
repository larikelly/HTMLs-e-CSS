document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetPanelId = this.getAttribute('for');
            panels.forEach(panel => {
                panel.style.display = 'none';
            });
            document.getElementById(targetPanelId).style.display = 'block';
        });
    });
});
