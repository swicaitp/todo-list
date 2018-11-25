<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Delete Task</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" media="screen" href="Assets/styles.css">
</head>
<body>
<main class="main-container">
  <?php
  require_once("db_connect.php");
  if(isset($_GET["id"])){
    $id = $_GET["id"];
    db();
    global $link;
    $query = "DELETE FROM todo WHERE id='$id'";
    $delete = mysqli_query($link, $query);
    if($delete){
      echo "<h1>Task deleted Successfully</h1>";
    }
  }
  ?>
</main>
<a href="index.php">Back to Task List</a>
</body>
</html>
