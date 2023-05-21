# The True Beacon Intern Project


##  Run development back-end part through follow these steps  

<br>

>Add csv file in project's root directory

<br>

```
cd True-Beacon

pip install virtualenv
python3 -m venv vEnv

source  vEnv/bin/activate

pip install -r requirements.txt

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runscript load_csv
python3 manage.py runserver


```


### For production level back-end please follow - [Click here](https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-22-04)
<br>

## Run development front-end part through follow these steps  
<br>

### For  Installation
<br>

```
cd front-end
npm install
```
<br>

### For building static asset
<br>

```
npm start
```
## Hosting front-end through vercel follow these steps  

### For  Installation
<br>

```
npm install
```
<br>

### For building static asset
<br>

```
npm run build
```
