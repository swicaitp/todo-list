<html>
<head>
  <title>Task Details</title>
  <link rel="stylesheet" href="Assets/styles.css">
</head>
<body class="grid">
<header>
  <h1>Detail View</h1>
</header>
<main class="main-container main-grid">
  <?php
    require_once("db_connect.php");
    if(isset($_GET["id"])){
      $id = $_GET["id"];
      db();
      global $link;
      $query = "SELECT todoTitle, todoDescription, time, date FROM todo WHERE id='$id'";
      $result = mysqli_query($link, $query);
      if(mysqli_num_rows($result)==1){
        $row = mysqli_fetch_array($result);
        if($row){
          $title = $row["todoTitle"];
          $description = $row["todoDescription"];
          $time = $row["time"];
          $date = $row["date"];

          echo "<h2>$title</h2><p>$description</p><p>$time</p><p>$date</p>";
        }
      }
      $query_complete = "SELECT todoTitle, todoDescription, time, date FROM complete WHERE id = '$id'";
      $result_complete = mysqli_query($link, $query_complete);
      if(mysqli_num_rows($result_complete)==1){
        $row = mysqli_fetch_array($result_complete);
        if($row){
          $title = $row["todoTitle"];
          $description = $row["todoDescription"];
          $time = $row["time"];
          $date = $row["date"];
          echo "<h2>$title</h2><p>$description</p><p>$time</p><p>$date</p>";
        }
    }
  } else {
    echo "You must use an id";
  }
?>
  <a href="index.php">Back to Task List</a>
</main>
<footer>

</footer>
</body>
</html>
