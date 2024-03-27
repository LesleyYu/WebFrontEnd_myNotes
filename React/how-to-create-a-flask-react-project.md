https://www.youtube.com/watch?v=7LNl2JlZKHA

### Setting up the backend

`mkdir flask-server`
`cd flask-server`
`touch server.py`
`python3 -m venv venv`
`. venv/bin/activate` or `source venv/bin/activate`

once you entered the (venv) environment, install Flask under this dir:
`pip3 install Flask`

### Setting up the frontend

We'll use npx create-react-app, type this in a new terminal:
`npx create-react-app client`

### Writing backend: server.py

```python
from flask import Flask

app = Flask(__name__)


# Members API Route
@app.route("/members")
def members():
  return {
    "members": ["Member1", "Member2", "Member3"]
  }

if __name__ == "__main__":
  app.run(debug=True)   # because we're in development mode
```

### Writing frontend

First we removed unnecessary files:
`app.test.js`, `index.css`, `logo.svg`

Next, we set up the proxy for our app.

Inside `package.json`, we configure the **proxy** to connect our frontend and the backend. Simply inset this line:
`"proxy": "http://localhost/5000",`
because the default route Flask (our backend) uses is port 5000.

Next we go to `App.js` to actually write something in it to transfer our backend *database* to frontend. This is, the json object 
`{ "members": ["Member1", "Member2", "Member3"] }`

```js
import React, {useState, useEffect} from 'react'

// useState will be used to create a state variable which will contain the data retreived from the backend, and also render the data on the page.
// useEffect will be used to fetch the backend api on the first render.

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      response => response.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      { (typeof data.members === "undefined" ) ? (
        <p> Loading... </p>
      ): (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
    </div>
  )
}

export default App
```
