/* assets/js/form.js */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('applicationForm');

    // Address copy logic
    const livingAddressSelect = document.getElementById('living-address');

    // Mapping of registered address fields to potential living address fields
    // Since the form asks for "Taki sam jak zameldowania" or "Inny", 
    // we don't have separate fields for living address in the prompt structure,
    // but usually "Inny" implies a text area or separate fields would appear.
    // The prompt just said 'Dropdown: "Adres zamieszkania *"' options: Same/Other.
    // So for now, we just handle the dropdown state.

    livingAddressSelect.addEventListener('change', (e) => {
        if (e.target.value === 'other') {
            // In a real app we might show hidden fields here
            // For this specific prompt requirement, we just keep the selection.
            // Maybe alert or focus a specific area if needed.
        }
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation check (HTML5 'required' handles most)
        if (form.checkValidity()) {
            alert('Twoje zgłoszenie zostało przyjęte! (To jest wersja demonstracyjna)');
            form.reset();
        } else {
            // Browser usually handles this, but just in case
            alert('Proszę wypełnić wszystkie wymagane pola.');
        }
    });

    // Top Header Button
    const topSubmitBtn = document.querySelector('.btn-submit-top');
    topSubmitBtn.addEventListener('click', () => {
        // Scroll to bottom submit button or trigger form submit
        const headerEmail = document.getElementById('header-email').value;
        if (headerEmail) {
            // auto-fill something if needed, or just focus form
        }
        form.scrollIntoView({ behavior: 'smooth' });
    });
});
