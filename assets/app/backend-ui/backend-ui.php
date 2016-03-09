<?php

    $database_name = 'mogulminions';
    $table_name = 'system_settings';
    $username = 'homestead';
    $password = 'secret';

    $ui_settings = './assets/build/backend-ui/backend-ui-settings.json';
    $ui_styles = './assets/build/backend-ui/backend-ui.css';

    //connect to mysql db
    $con = mysql_connect($username, $password, "") or die('Could not connect: ' . mysql_error());
    //connect to the employee database
    mysql_select_db($database_name, $con);

    //read the json file contents
    $jsondata = file_get_contents($ui_settings);

    //convert json object to php associative array
    $data = json_decode($jsondata, true);

    //get the employee details
    $id = 1;
    $item = "backend_brand_settings";

    $app_name = $data['app_name'];
    $app_tagline = $data['app_tagline'];
    $primary_color_light = $data['primary_color_light'];
    $primary_color_dark = $data['primary_color_dark'];
    $secondary_color_light = $data['secondary_color_light'];
    $secondary_color_dark = $data['secondary_color_dark'];

    $customcss = file_get_contents($ui_styles);

    $value = '{
        "app_name":$app_name,
        "app_tagline":$app_tagline,
        "primary_color_light":$primary_color_light,
        "primary_color_dark":$primary_color_dark,
        "secondary_color_light":$secondary_color_light,
        "secondary_color_dark":$secondary_color_dark,
        "customcss":$customcss
    }';

    //insert into mysql table
    $sql = "INSERT INTO $table_name(id, system_settings, value)
    VALUES('$id', '$item', '$value')";

    if (!mysql_query($sql,$con)) {
        die('Error : ' . mysql_error());
    }
?>
