# React Flask App

Boilerplate for React Flask App

```
npx create-react-app <name of app>
cd <name of app>
mkdir api
cd api
python3 -m venv venv
source venv/bin/activate
touch run.py
touch requirements.txt
mkdir api
cd api
touch __init__.py
pip install -r requirements.txt

```

```
src/package.json
"proxy": "http://localhost:5000"
```
```
npm start
python run.py
```
Runs on localhost:3000 for front end, api runs on localhost:5000


```
api
├── api
│   ├── __init__.py
│   └── __pycache__
├── requirements.txt
└── run.py
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt

├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
└── yarn.lock

```
