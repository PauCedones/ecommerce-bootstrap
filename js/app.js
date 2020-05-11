$(document).ready(function() {
    $("#btnFetch").click(function() {
    // disable button
    $(this).prop("disabled", true);
    // add spinner to button
    $(this).html(
    '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div> cargando...'
    );
    });
    });