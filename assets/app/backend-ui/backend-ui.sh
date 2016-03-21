#!/bin/bash

# ----------- Make Variables

	VAGRANT_HOST="vagrant@127.0.0.1"

	DB_HOST="127.0.0.1"
	DB_NAME="mogulminions"
	TABLE_NAME="system_settings"
	DB_USER="homestead"
	DB_PASS="secret"

    CURRENT_PATH="/Users/nilssanderson/Code/MogulMinions/mogulminions/themes/heron"
    VAGRANT_PATH="/Users/nilssanderson/Homestead"

	UI_SETTINGS_PATH="$CURRENT_PATH/assets/app/backend-ui/backend-ui-settings.json"
    UI_STYLES_PATH="$CURRENT_PATH/assets/app/backend-ui/backend-ui.css"

    APP_NAME="App Name"
    APP_TAGLINE="Testing a long Tagline"
    PRIMARY_COLOR_LIGHT="#464F77"
    PRIMARY_COLOR_DARK="#464F77"
    SECONDARY_COLOR_LIGHT="#464F77"
    SECONDARY_COLOR_DARK="#464F77"

    CUSTOMCSS=$(<./assets/app/backend-ui/backend-ui.css)

    FILE_NAME="$CURRENT_PATH/assets/app/backend-ui/backend-ui.sql"
    VAGRANT_FILE_NAME="/home/vagrant/Code/MogulMinions/mogulminions/themes/heron/assets/app/backend-ui/backend-ui.sql"

    QUERY="TRUNCATE TABLE \`$TABLE_NAME\`;
        INSERT INTO \`$TABLE_NAME\`
        VALUES (
            1,
            'backend_brand_settings',
            '{\"app_name\":\"$APP_NAME\",\"app_tagline\":\"$APP_TAGLINE\",\"primary_color_light\":\"$PRIMARY_COLOR_LIGHT\",\"primary_color_dark\":\"$PRIMARY_COLOR_DARK\",\"secondary_color_light\":\"$SECONDARY_COLOR_LIGHT\",\"secondary_color_dark\":\"$SECONDARY_COLOR_DARK\",\"custom_css\":\"$CUSTOMCSS\"}'
        );"

    # Write query to FILE_NAME
    echo "Write query to $FILE_NAME"
    echo $QUERY > $FILE_NAME

    # Write FILE_NAME to Database
    echo "Writing $FILE_NAME to Database"
    CMD="mysql -u$DB_USER -p$DB_PASS $DB_NAME < $VAGRANT_FILE_NAME"
    ssh $VAGRANT_HOST -p 2222 "$CMD"

	# Flush Cache
	ssh $VAGRANT_HOST -p 2222 "cd ~/Code/MogulMinions/mogulminions && php artisan cache:clear"
