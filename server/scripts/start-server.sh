# execute migrations on database
python referaApi/manage.py migrate

# Populate database
python referaApi/manage.py loaddata referaApi/seeds/**.json

# Run server
python referaApi/manage.py runserver 0.0.0.0:8000