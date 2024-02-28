# chatgpt-integration-test

Test application, Integration of CHATGPT with backend api and chat screen using frontend.

### Tech Stack -> React, Node JS (Typescript)

* Implement functionality to send the user's input to the backend and display the returned response in the UI.
* Implement basic styling for the chat interface.
* user-friendly application with clean and organized code.

## Running Locally

Setup .env file locally to hold the port and the chatgpt api keys

```sh
$ git clone git@github.com:MuhammadMoiz200099/chatgpt-integration-test.git

For Frontend

$ cd frontend
$ yarn install
$ yarn start

For Backend

$ cd backend
$ yarn install
$ yarn start

```


## Sample ENV FrontEnd

```
REACT_APP_BASE_URL=

```

The Frontend application should be available and running on [http://localhost:3000/](http://localhost:3000/).
e.g.
```
    http://localhost:3000/
```




## Sample ENV Backend

```
APP_ID=backend
PORT=9000
LOG_LEVEL=debug
REQUEST_LIMIT=100kb

debug=true

whitelist_url=

OPENAI_API_KEY=
OPENAI_ORGANIZATION=

```


And Backend application should be available and running on [http://localhost:9000](http://localhost:9000/).
Also, having prefix /api/v1.
e.g.
```
    http://localhost:9000/api/v1/<ENDPOINT>
```
