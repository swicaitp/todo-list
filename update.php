<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Update Task</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" media="screen" href="Assets/styles.css">
</head>
<body class="grid">
<header>
  <h1>Update Task Form</h1>
</header>
<main class="main-container main-grid">
  <?php
  require_once("db_connect.php");
  if(isset($_GET["id"])){
    $id = $_GET["id"];
    db();
    global $link;
    $query = "SELECT id, todoTitle, todoDescription, date FROM todo WHERE id = '$id'";
    $result = mysqli_query($link, $query);
    if(mysqli_num_rows($result)==1){
      $row = mysqli_fetch_array($result);
      if($row){
        $title = $row["todoTitle"];
        $description = $row["todoDescription"];

        echo "
        <form method='post' action='update.php'>
        <p>Task Title:</p>
        <input type='text' name='title' value='$title'>
        <p>Task Description:</p>
        <input type='text' name='description' value='$description'>
        <br>
        <input type='submit' name='submit' value='Update Task Information'>
        </form>
        ";
      }
    } else {
      echo "No Task";
    }

  if(isset($_POST['submit'])){
    $title = $_POST["title"];
    $description = $_POST["description"];
    db();
    //Create Update SQL Query
    $query = "UPDATE todo SET todoTitle = '$title', todoDescription = '$description', WHERE id = '$id'";
    $updateTask = mysqli_query($link, $query);
    if($updateTask){
      echo "Task Successfully Updated";
    } else {
      echo mysql_error($link);
    }
  }
}
?>
</main>
<footer>
  <a href="index.php">Back to Task List</a>
</footer>
</body>
</html>
