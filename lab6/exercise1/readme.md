
## Web services to get, add, update and delete grades

### List of web services


 |Url format | Method | Description|
 ------------|-------------|-----------
 localhost:3600/grades | GET | Get list of all the grades.
 localhost:3600/grades/create | POST | Add new grade ( name, course , grade)
 localhost:3600/grades/update/:id | PUT | Update existing grade.
 localhost:3600/grades/delete/:id | DELETE | Delete existing grade.