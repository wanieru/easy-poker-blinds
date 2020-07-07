<?php
  $v = "3"
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
    <h1 class="text-center">⏲️ Easy Poker Blinds</h1>
    <div class="card border-primary mb-3 settings">
      <div class="card-header">⚙️ Settings</div>
      <div class="card-body">
        <div class="form-group row">
          <label for="test" class="col-sm-4 col-form-label">👩 Players</label>
          <div class="col-sm-6">
            <input type="number" class="form-control" id="players" value="4" step="1" min="2" max="1000">
          </div>
        </div>
        <div class="form-group row">
          <label for="test" class="col-sm-4 col-form-label">⏲️ Target Length (hours)</label>
          <div class="col-sm-6">
            <input type="number" class="form-control" id="length" value="1" step="0.25" min="0.25" max=24>
          </div>
        </div>
        <div class="form-group row">
          <label for="test" class="col-sm-4 col-form-label">💸 Starting Chips</label>
          <div class="col-sm-6">
            <input type="number" class="form-control" id="starting_amount" value="5000" step=1 min=1 max=100000000>
          </div>
        </div>
        <div class="form-group row">
          <label for="test" class="col-sm-4 col-form-label">⚛️ Smallest Chip Denomination</label>
          <div class="col-sm-6">
            <input type="number" class="form-control" id="smallest_denomination" value="10" step=1 min=1 max=100000000>
          </div>
        </div>
        <div class="form-group row">
          <label for="test" class="col-sm-4 col-form-label">📈 Blind Increment</label>
          <div class="col-sm-6">
            <select class="custom-select" id="rate">
              <option value="1.1">🙂 Low (1.1x)</option>
              <option value="1.25" selected>😄 Normal (1.25x)</option>
              <option value="1.5">🤔 Medium (1.5x)</option>
              <option value="2">😰 Extreme (2x)</option>
            </select>
          </div>
        </div>
        <button id="start_button" type="button" class="btn btn-primary">✔️ Start</button>
      </div>
    </div>
    <div class="card border-primary mb-3 initially_hidden">
      <div class="card-header">⏲️ Timer <div class="float-right"><button id="settings_button" type="button" class="btn btn-primary btn-lg">⚙️ Settings</button></div></div>
      <div class="card-body">
        <h2 class="text-center" id="level"></h2>
        <h1 class="text-center" id="blinds"></h1>
        <h2 class="text-center" id="timer"></h2>
        <div class="text-center">
          <button id="prev" type="button" class="btn btn-primary btn-lg">⬅️</button>
          <button id="toggle_button" type="button" class="btn btn-primary btn-lg">⏯️ Start/Pause</button>
          <button id="next" type="button" class="btn btn-primary btn-lg">➡️</button>
        </div>
      </div>
    </div>
    <div class="card border-primary mb-3 initially_hidden">
      <div class="card-header">📅 Schedule</div>
      <div class="card-body">
        <p id="description"></p>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Level</th>
              <th scope="col">Small Blind</th>
              <th scope="col">Big Blind</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody id="table-body">
          </tbody>
        </table>
      </div>
    </div>
    <div class="text-center">
      <p>Made with ❤️ by <a href="https://www.wanieru.com">Wanieru</a></p>
      <p><a href="https://github.com/wanieru/easy-poker-blinds">Easy Poker Blinds</a> on Github</p>
    </div>
  </div>
  <script src="js/main.js?v=<?php echo $v; ?>"></script>
</body>
</html>
