document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('languageToggle');

    // Verificar si hay un valor guardado en localStorage
    const savedLanguagePreference = localStorage.getItem('languagePreference');
    
    if (savedLanguagePreference !== null) {
        // Si hay un valor guardado, aplicar la preferencia
        checkbox.checked = (savedLanguagePreference === 'spanish');
        changeLanguage(checkbox.checked);
        
    }

    if(savedLanguagePreference == null) {
        localStorage.setItem('languagePreference','english');
    }

    // Escuchar cambios en el checkbox
    checkbox.addEventListener('change', function () {
        const isChecked = checkbox.checked;

        // Guardar la preferencia en localStorage
        localStorage.setItem('languagePreference', isChecked ? 'spanish' : 'english');
        
        // Cambiar el idioma
        changeLanguage(!isChecked);
        
        location.reload();

    });
});

// Función para cambiar el idioma basado en el estado del checkbox
function changeLanguage(isEnglish) {
    if (isEnglish) {
        console.log('Cambiando a inglés');
        // Aquí puedes agregar la lógica para cambiar el idioma a inglés
        
    } else {
        console.log('Cambiando a español');
        // Aquí puedes agregar la lógica para cambiar el idioma a español
        

    }
}
