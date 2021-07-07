<html>
<head>
    <title>ToDo-List PHP</title>
    <link rel="stylesheet" href="Assets/styles.css">
</head>
<body>
<main class="main-container">
<?php
    $lines = array("Hello from the other side", "I must have called a thousand times");
    $count = 0;
    while ($count < 2){
        echo "<h1>" . $lines[$count] . "</h1>";
        $count++;
    }
?>
</main>
</body>
</html>