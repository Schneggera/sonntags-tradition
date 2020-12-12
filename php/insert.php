<?php

$arr = array(
        "title" => $_POST['title'],  
        "ingredient" => $_POST['ingredients'],
        "recipe" => $_POST['recipe']
    );

$file = $_POST['courses'] . '.json';
$inp = file_get_contents($file);
$tempArray = json_decode($inp);
array_push($tempArray, $arr);
$jsonData = json_encode($tempArray);
file_put_contents($file, $jsonData);


//$recipeJson = json_encode($recipe);
//$inp = file_get_contents('results.json');
//$inp .= $recipeJson;

function debug_to_console($data) {
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo $output;
}
debug_to_console($file);

?>