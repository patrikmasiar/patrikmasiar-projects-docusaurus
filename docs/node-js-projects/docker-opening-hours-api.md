# Doctor's opening hours API

## Technologies
`#nodejs` `#express` `#mongoose` `#mongodb` 

## Overview
Simple NodeJS project. It is an API service. The project is using MongoDB. The first iteration was created as interview assignment task. Then it was improved with databse connection and refactor. Imrovement also includes route for POST request.

## Docs
### API
| ROUTE | METHOD | RESPONSE
|:-------------|:-------------|:-------------|
| `/reservation/all` | **GET** | `Reservation[]` |
| `/reservation` | **POST* | `Reservation` |

### Types
```javascript
type Reservation = {
  date: string;
  start: string;
  end: string;
};
```

## Sources
* [Github repository](https://github.com/patrikmasiar/doctor-opening-hours-api)
* [Github repository - ReactJS project](https://github.com/patrikmasiar/doctor-opening-react-app)