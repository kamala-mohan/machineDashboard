$(document).ready(function() {
    $.ajax({
      url: './data.json',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        var cardHtml = '';
        $.each(data, function(index, machine) {
          
          var statusClass = '';
          if (machine.STATUS === 'RUNNING') {
            statusClass = 'text-success card-success';
          } else if (machine.STATUS === 'STOPPED') {
            statusClass = 'text-danger card-stopped';
          }
          cardHtml += '<div class="col-sm-4 mb-3">' +
            '<div class="card h-100">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + machine.MACHINE + '</h5>' +
            '<p class="card-text">Performance: ' + machine.PERFORMANCE + '</p>' +
            '<p class="card-text">Running Since: ' + machine['RUNNING SINCE'] + '</p>' +
            '<p class="card-text">Parts Produced: ' + machine['PARTS PRODUCED'] + '</p>' +
            '<p class="card-text ' + statusClass + '">' + machine.STATUS + '</p>' +
            '</div>' +
            '</div>' +
            '</div>';
        });
        $('#machine-cards').html(cardHtml);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('Error loading data: ' + textStatus);
      }
    });
  });
  