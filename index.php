<?php require_once("db_connect.php");?>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>To-Do Task List</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" media="screen" href="Assets/styles.css" />
</head>
<body>
<main class="main-container">
  <h1>My Tasks</h1>
  <p><a href="create.php">Add Task from To-Do Database</a></p>
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
      <li><a href="detail.php?id=<?php echo $id?>"><?php echo $title?>
        </a><?php echo "[[ $date ]]"; ?>
      </li>
    </ul>
    <?php
  }
}

?>
</main>
</body>
</html>

