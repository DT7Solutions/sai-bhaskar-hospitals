$(document).ready(function() {
    // Initialize EmailJS
    emailjs.init("-dH2HZ2kSwRVINVSK"); // Your EmailJS Public Key

    // Handle form submission
    $('#appointmentForm1').on('submit', function(event) {
        event.preventDefault(); // Prevent default page reload

        // ✅ Set submission date
        $('#submission_date').val(new Date().toLocaleString());

        // Send form via EmailJS
        emailjs.sendForm('service_uryai1f', 'template_i9fmm1f', this)
            .then(function() {
                alert('Appointment booked successfully!');

                // Close modal after success
                var modal = bootstrap.Modal.getInstance($('#appointmentModal')[0]);
                modal.hide();

                // Reset form
                $('#appointmentForm1')[0].reset();
            }, function(error) {
                alert('Oops! Something went wrong. Please try again.');
                console.error('EmailJS error:', error);
            });
    });
});