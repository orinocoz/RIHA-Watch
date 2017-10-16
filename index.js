<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mall</title>

  <!-- JQuery -->
  <script src="https://code.jquery.com/jquery.min.js"></script>

  <!-- Material Design icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
    crossorigin="anonymous">
  <!-- Tether on vaja tooltip-de jaoks -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" crossorigin="anonymous"></script>

  <!-- Stiilid -->
  <link rel='stylesheet' href='css/Samas.css'>
  <style></style>

  <!-- script src=''></script -->

  <script>
    function alusta() {
      $('#SysteemideArv').click(() => {
        $getJSON('https://test.riha.ee/api/v1/systems', (data) => {
          $('#Tulemus').html('<p>RIHAs on kirjeldatud ' + data.totalElements + 'süsteemi</p>');
        });
      });
    }
  </script>

</head>

<body onload="alusta()">
  <div class='container-fluid'>
    <div class='row'>
      <div class='col-xs-12 col-sm-10 col-md-8 col-lg-8 col-xl-6'>

        <div id='ParinguValik'>
          <button id='SysteemideArv' type="button" class="btn btn-secondary">Süsteemide arv?</button>
        </div>
        <div id='Tulemus'></div>

      </div>
    </div>
</body>

</html>