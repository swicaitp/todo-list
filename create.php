<?php require_once("db_connect.php"); ?>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Create Task</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" media="screen" href="Assets/styles.css">
</head>
<body class="grid">
<header>
  <h1>Create Task Form</h1>
</header>
<main class="main-container main-form main-grid">
  <form method="post" action="create.php">
    <p>Task Title:</p>
    <input type="text" name="todoTitle" id="todoTitle">
    <p>Task Description:</p>
    <input type="text" name="todoDescription" id="todoDescription">
    <p>Task Time:</p>
    <input type="time" name="todoTime" id="todoTime">
    <p>Task Date:</p>
    <input type="date" name="todoDate" id="todoDate">
    <input type="submit" name="submit" id="submit" value="Submit">
    <a href="index.php">Back</a>
  </form>
<?php

if(isset($_POST["submit"])){
  $title = $_POST["todoTitle"];
  $description = $_POST["todoDescription"];
  $time = $_POST["todoTime"]
  $date = $_POST["todoDate"];
  //Connect to Database
  db();
  global $link;
  //Start Database Query
  $query = "INSERT INTO todo (todoTitle, todoDescription, time, date)
  VALUES('$title', '$description', '$time', '$date')";
  $todoInsert = mysqli_query($link, $query);
  if($todoInsert){
    print "<p class='php-response'>Query Executed Successfully</p>";
  } else
  die("Unable to execute query: " . mysql_error());
  mysqli_close($link);
}
?>
</main>
</body>
</html>

