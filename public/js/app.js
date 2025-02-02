$(document).ready(function() {
    // Sorting state
    let currentSort = {
        column: null,
        direction: 'asc'
    };

    // Loading overlay functions
    function showLoading() {
        $('.loading-overlay').css('display', 'flex').fadeIn(200);
    }

    function hideLoading() {
        $('.loading-overlay').fadeOut(200);
    }

    // Update activity count
    function updateActivityCount() {
        $('#activityCount').text($('#activityTable tbody tr').length);
    }

    // Sort table function
    function sortTable(column) {
        const table = $('#activityTable');
        const tbody = table.find('tbody');
        const rows = tbody.find('tr').toArray();

        // Update sort direction
        if (currentSort.column === column) {
            currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            currentSort.column = column;
            currentSort.direction = 'asc';
        }

        // Update sort icons
        table.find('.sort-icon i').attr('class', 'fas fa-sort');
        const currentIcon = table.find(`th[data-sort="${column}"] .sort-icon i`);
        currentIcon.attr('class', `fas fa-sort-${currentSort.direction === 'asc' ? 'up' : 'down'}`);

        // Sort rows
        rows.sort((a, b) => {
            const aValue = $(a).find(`.${column}`).text().toLowerCase();
            const bValue = $(b).find(`.${column}`).text().toLowerCase();
            
            if (aValue < bValue) return currentSort.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return currentSort.direction === 'asc' ? 1 : -1;
            return 0;
        });

        // Reorder table rows
        tbody.empty();
        rows.forEach(row => tbody.append(row));
    }

    // Sortable columns click handler
    $('.sortable').click(function() {
        const column = $(this).data('sort');
        sortTable(column);
    });

    // Open Modal for Adding Activity
    $('#addActivityBtn').click(function() {
        $('#activityForm')[0].reset();
        $('#activityId').val('');
        $('#activityModalLabel').text('Add New Activity');
        $('#nameWarning').hide();
        $('#activityModal').modal('show');
    });

    // Form validation
    function validateForm() {
        const name = $('#name').val().trim();
        const description = $('#description').val().trim();
        
        if (!name) {
            $('#nameWarning').text('Name is required').show();
            return false;
        }
        
        if (!description) {
            $('#description').addClass('is-invalid');
            return false;
        }
        
        return true;
    }

    // Save Activity (Add or Update)
    $('#saveActivityBtn').click(function(e) {
        e.preventDefault();

        if (!validateForm()) return;

        const activityData = {
            id: $('#activityId').val(),
            name: $('#name').val().trim(),
            description: $('#description').val().trim()
        };

        $(this).prop('disabled', true);
        showLoading();

        $.ajax({
            url: activityData.id ? '/activities/' + activityData.id : '/activities',
            method: activityData.id ? 'PUT' : 'POST',
            data: activityData,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(response) {
                $('#activityModal').modal('hide');
                
                if (activityData.id) {
                    $('tr[data-id="' + activityData.id + '"] td.name').text(response.name);
                    $('tr[data-id="' + activityData.id + '"] td.description').text(response.description);
                } else {
                    const newRow = `
                        <tr data-id="${response.id}" class="fade-in">
                            <td class="name">${response.name}</td>
                            <td class="description">${response.description}</td>
                            <td class="text-center">
                                <div class="btn-group btn-group-sm">
                                    <button class="btn btn-outline-warning editActivityBtn" data-id="${response.id}" title="Edit">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="btn btn-outline-danger deleteActivityBtn" data-id="${response.id}" title="Delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                    $('#activityTable tbody').append(newRow);
                    updateActivityCount();
                }

                $('#successModal').modal('show');
            },
            error: function(xhr) {
                if (xhr.status === 422) {
                    $('#nameWarning').show();
                } else {
                    console.error(xhr.responseText);
                }
            },
            complete: function() {
                $('#saveActivityBtn').prop('disabled', false);
                hideLoading();
            }
        });
    });

    // Store the ID of the activity to be deleted
    let deleteActivityId = null;

    // Show Delete Confirmation Modal
    $(document).on('click', '.deleteActivityBtn', function() {
        deleteActivityId = $(this).data('id');
        $('#deleteModal').modal('show');
    });

    // Handle Delete Confirmation
    $('#confirmDeleteBtn').click(function() {
        if (!deleteActivityId) return;

        $(this).prop('disabled', true);
        showLoading();

        $.ajax({
            url: '/activities/' + deleteActivityId,
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(response) {
                $('tr[data-id="' + deleteActivityId + '"]').fadeOut(300, function() {
                    $(this).remove();
                    updateActivityCount();
                });
                $('#deleteModal').modal('hide');
                deleteActivityId = null;
            },
            error: function(xhr) {
                console.error(xhr.responseText);
                alert('Error deleting activity');
            },
            complete: function() {
                $('#confirmDeleteBtn').prop('disabled', false);
                hideLoading();
            }
        });
    });

    // Edit Activity
    $(document).on('click', '.editActivityBtn', function() {
        const id = $(this).data('id');
        showLoading();

        $.ajax({
            url: '/activities/' + id,
            method: 'GET',
            success: function(response) {
                $('#activityId').val(response.id);
                $('#name').val(response.name);
                $('#description').val(response.description);
                $('#activityModalLabel').text('Edit Activity');
                $('#nameWarning').hide();
                $('#activityModal').modal('show');
            },
            error: function(xhr) {
                console.error(xhr.responseText);
                alert('Error fetching activity details');
            },
            complete: function() {
                hideLoading();
            }
        });
    });

    // Reset form validation on modal close
    $('#activityModal').on('hidden.bs.modal', function() {
        $('#nameWarning').hide();
        $('#description').removeClass('is-invalid');
    });

    // Initialize tooltips
    $('[title]').tooltip();
});