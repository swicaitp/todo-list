<?php
function db(){
        global $link;
        $link = mysqli_connect("localhost", "root", "", "todo")
            or die("Could not connect to database");
        return $link;
    }
    if(db()){
        print"<footer><p>Connection Successful</p></footer>";
    }
?>
