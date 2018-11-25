<?php require_once("db_connect.php");?>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>To-Do Task List</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
      crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" media="screen" href="Assets/styles.css" />
</head>
<body class="grid">
<main class="main-container main-grid">
  <h1>My Tasks</h1>

<?php
//Call for Database Connection
db();
//Assign returned connection variable to global variable instance
global $link;
$query = "SELECT id, todoTitle, todoDescription, date FROM todo";
$result = mysqli_query($link, $query);
if(mysqli_num_rows($result) >= 1){
  while($row = mysqli_fetch_array($result)){
    $id =$row["id"];
    $title = $row["todoTitle"];
    $date = $row["date"];
    ?>
    <ul>
      <li><a href="detail.php?id=<?php echo $id?>"><?php echo $title?></a>
      <?php echo "[[ $date ]]";?>
      <button type="button"><a href="update.php?id=<?php echo $id?>"><i class="fas fa-pen"></i></a></button>
      <button type="button"><a href="delete.php?id=<?php echo $id?>"><i class="fas fa-times"></i></a></button>
      </li>
    </ul>
    <?php
  }
}
?>
<p><a href="create.php">Add Task from To-Do Database</a></p>
</main>
</body>
</html>

