<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Create Todo PHP</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" media="screen" href="Assets/styles.css">
</head>
<body>
<main class="main-container">
  <form method="post" action="create.php">
    <input type="text" name="todoTitle" id="todoTitle">
    <input type="text" name="todoDescription" id="todoDescription">
    <input type="submit" name="submit" id="submit" value="Submit">
  </form>
</main>

</body>
</html>
<?php
require_once("db_connect.php");
if(isset($_POST["submit"])){
  $title = $_POST["todoTitle"];
  $description = $_POST["todoDescription"];
  //Connect to Database
  db();
  global $link;
  //Start Database Query
  $query = "INSERT INTO todo (todoTitle, todoDescription, date)
  VALUES('$title', '$description', now())";
  $todoInsert = mysqli_query($link, $query);
  if($todoInsert){
    echo "Query Executed Successfully";
  } else
  die("Unable to execute query: " . mysql_error());
  mysqli_close($link);
}
?>
