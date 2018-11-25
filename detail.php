<html>
<head>
  <title>Task Details</title>
  <link rel="stylesheet" href="Assets/styles.css">
</head>
<body>
<main class="main-container">
  <?php
    require_once("db_connect.php");
    if(isset($_GET["id"])){
      $id = $_GET["id"];
      db();
      global $link;
      $query = "SELECT todoTitle, todoDescription, date FROM todo WHERE id='$id'";
      $result = mysqli_query($link, $query);
      if(mysqli_num_rows($result)==1){
        $row = mysqli_fetch_array($result);
        if($row){
          $title = $row["todoTitle"];
          $description = $row["todoDescription"];
          $date = $row["date"];

          echo "<h2>$title</h2><p>$description</p><p>$date</p>";
        }
      } else {
        echo "No Task";
      }
    } else {
      echo "You must use an id";
    }
  ?>
  <a href="index.php">Back to Task List</a>
</main>
</body>
</html>
