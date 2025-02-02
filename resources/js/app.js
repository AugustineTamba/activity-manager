import './bootstrap';
$(document).ready(function() {

    // Open Modal for Adding Activity
    $('.addActivityBtn').click(function() {
        $('#activityForm')[0].reset(); // Reset form fields
        $('#activityId').val(''); // Clear hidden ID field
        $('#activityModalLabel').text('Add New Activity'); // Set title to Add
        $('#activityModal').modal('show'); // Show modal
    });

    // Save Activity (Add or Update)
    $('#saveActivityBtn').click(function(e) {
        e.preventDefault(); // Prevent default form submission
        var activityData = {
            id: $('#activityId').val(),
            name: $('#name').val(),
            description: $('#description').val()
        };

        // Disable save button to prevent multiple clicks
        $(this).prop('disabled', true);

        $.ajax({
            url: activityData.id ? '/activities/' + activityData.id : '/activities', // Check if updating or adding
            method: activityData.id ? 'PUT' : 'POST', // Use PUT if updating, POST if adding
            data: activityData,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') // Include CSRF token
            },
            success: function(response) {
                // Close the modal
                $('#activityModal').modal('hide');
                // Show success message (optional)
                alert('Activity saved successfully!');
                // Enable save button again
                $('#saveActivityBtn').prop('disabled', false);

                // Add new activity to the table or update it
                if (activityData.id) {
                    // If editing, update the activity row
                    $('tr[data-id="' + activityData.id + '"] td.name').text(response.name);
                    $('tr[data-id="' + activityData.id + '"] td.description').text(response.description);
                } else {
                    // If adding, append the new activity to the table
                    var newRow = `<tr data-id="${response.id}">
                        <td>${response.name}</td>
                        <td>${response.description}</td>
                        <td><button class="editActivityBtn" data-id="${response.id}">Edit</button></td>
                        <td><button class="deleteActivityBtn" data-id="${response.id}">Delete</button></td>
                    </tr>`;
                    $('#activityTable').append(newRow);
                }
            },
            error: function(xhr) {
                console.error(xhr.responseText); // Log error for debugging
                alert('Error saving activity');
                $('#saveActivityBtn').prop('disabled', false); // Re-enable button on error
            }
        });
    });

    // Delete Activity
    $(document).on('click', '.deleteActivityBtn', function() {
        if (confirm('Are you sure you want to delete this activity?')) {
            var id = $(this).data('id');
            $.ajax({
                url: '/activities/' + id,
                method: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') // Include CSRF token
                },
                success: function(response) {
                    // Remove the activity row from the table
                    $('button[data-id="' + id + '"]').closest('tr').remove();
                    alert('Activity deleted successfully');
                },
                error: function(xhr) {
                    console.error(xhr.responseText); // Log error for debugging
                    alert('Error deleting activity');
                }
            });
        }
    });
});
