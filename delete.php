<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Delete Task</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" media="screen" href="Assets/styles.css">
</head>
<body class="grid-response">
<?php
  require_once("db_connect.php");
  if(isset($_GET["id"])){
    $id = $_GET["id"];
    db();
    global $link;
    $query = "DELETE FROM todo WHERE id='$id'";
    $delete = mysqli_query($link, $query);
    if($delete){
      print "<p class='main-grid-response'>Task deleted Successfully</p>";
      print "<a href='index.php' class='main-grid-response'>Back to Task List</a>";
    }
  }
?>
</body>
</html>

