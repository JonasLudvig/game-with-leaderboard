<!DOCTYPE html>

<?php
  require_once('config/dbconfig.php');

  $db = new Database("host", "dbname", "username", "password");

  $scores = json_encode($db->query("SELECT * FROM leaderboard ORDER BY time ASC"));
  $values = explode('"', $scores);
?>

<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./src/css.css" />
    <title>Game</title>
</head>

<body>
    <div class="entry">
        <div class="content">
            <h1>Get clicking, time to beat is <?php print_r($values[43]) ?>s</h1>
            <div class="map-js">
                <div class="spawn-js"></div>
                <button class="button button-start start-js">Start</button>
            </div>
        </div>
    </div>
    <div class="entry">
        <div class="content">
            <h1>Leaderboard</h1>
            <div class="leaderboard-entry">
                <div class="leaderboard-rank">
                    <p>1st</p>
                </div>
                <div class="leaderboard-player">
                    <p><?php print_r($values[3]) ?></p>
                </div>
                <div class="leaderboard-score">
                    <p><?php print_r($values[11]) ?></p>
                </div>
            </div>
            <div class="leaderboard-entry">
                <div class="leaderboard-rank">
                    <p>2nd</p>
                </div>
                <div class="leaderboard-player">
                    <p><?php print_r($values[19]) ?></p>
                </div>
                <div class="leaderboard-score">
                    <p><?php print_r($values[27]) ?></p>
                </div>
            </div>
            <div class="leaderboard-entry">
                <div class="leaderboard-rank">
                    <p>3rd</p>
                </div>
                <div class="leaderboard-player">
                    <p><?php print_r($values[35]) ?></p>
                </div>
                <div class="leaderboard-score">
                    <p id="thres"><?php print_r($values[43]) ?></p>
                </div>
            </div>
        </div>
    </div>
    <script src="./dist/app.js"></script>
</body>

</html>

<?php
  if (isset($_POST['submit']))
  {
    $player = $_POST['player'];
    $time = $_POST['playerTime'];
    $db->query("INSERT INTO leaderboard VALUES ('{$player}', '{$time}')");
    header('location: index.php');
  }
?>