<?php
  $v = "1"
?><!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>⏲️ Easy Poker Blinds</title>
  <meta name="description" content="Poker Clock">
  <meta name="author" content="Wanieru">

  <link rel="stylesheet" href="css/main.css?v=<?php echo $v; ?>">
  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="css/lib/bootstrap.min.css?v=<?php echo $v; ?>">

</head>

<body>
  <div class="container pt-3 pb-5">
    <div class="card border-primary mb-3">
      <div class="card-header">Settings</div>
      <div class="card-body">
        <div class="form-group row">
          <label for="test" class="col-sm-2 col-form-label">Target Length (hours)</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="length" value="1">
          </div>
        </div>
        <div class="form-group row">
          <label for="test" class="col-sm-2 col-form-label">Starting Chips</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="starting_amount" value="5000">
          </div>
        </div>
        <div class="form-group row">
          <label for="test" class="col-sm-2 col-form-label">Smallest Chip Denomination</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="smallest_denomination" value="10">
          </div>
        </div>
        <div class="form-group row">
          <label for="test" class="col-sm-2 col-form-label">Blind Increment</label>
          <div class="col-sm-10">
            <select class="custom-select" id="rate">
              <option value="1.25">Low (1.25x)</option>
              <option value="1.5" selected>Normal (1.5x)</option>
              <option value="1.75">Medium (1.75x)</option>
              <option value="2">High (2x)</option>
              <option value="2.5">Extreme (2x)</option>
            </select>
          </div>
        </div>
        <button id="start_button" type="button" class="btn btn-primary">Start</button>
      </div>
    </div>
  </div>
  <script src="js/main.js?v=<?php echo $v; ?>"></script>
</body>
</html>
