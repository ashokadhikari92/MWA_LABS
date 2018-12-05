1. Write a MongoDB query to display all the documents in the collection restrurants.

```
db.restaurants.find() // or
db.restaurants.find().pretty();

```

2. Write a MontoDB query to display the fields restrurant_id, name, district and cuisine for all the documents in the collection restaurant.

```
db.restaurants.find({},{restaurant_id:1,name:1,district:1,cuisine:1});

```

3. Write a MongoDB query to display the fields restaurant_id, name, district and cuisine, but exclude the field_id for all the documents in the collection restaurant.

```
db.restaurants.find({},{restaurant_id:1,name:1,district:1,cuisine:1,_id:0});

```

4. Write a MongoDB query to display the fields restaurant_id, name, district and zipcode, but exclude the field_id for all the documents in the collection restaurants.

```
db.restaurants.find({}, {restaurant_id:1,name:1,"address.zipcode":1,_id:0}).pretty();
```

5. Write a MongoDB query to display all the restaurant which is in the district Bronx.

```
db.restaurants.find({district:"Bronx"}).pretty()
```

6. Write a MongoDB query to display the first 5 restaurant which is in the district Bronx.

```
db.restaurants.find({district:"Bronx"}).limit(5).pretty();
```

7. Write a MongoBD query to display the next 5 restaurants after skipping first 5 which are in the district Bronx.

```
db.restaurants.find({district:"Bronx"}).skip(5).limit(5).pretty();
```

8. Write a MongoDB query to find the restaurants which locates in coord value less than -95.754168.

```
db.restaurants.find({"address.coord":{$lt:-95.754168}}).pretty();
```

9. Write a MongoDB query to find the restaurants that does not prepare any cuisine of 'American' and their grade score more than 70 and coord value less than -65.754168.

```
db.restaurants.find({cuisine:{$ne:"American"},"grades.score":{$gt:70},"address.coord":{$lt:-65.754168}}).pretty(); // Found 9 documents
db.restaurants.find({cuisine:{$ne:"American"},grades:{$elemMatch:{score:{$gt:70}}},"address.coord":{$lt:-65.754168}}).pretty(); // Found 9 documents
```

10. Write a MongoDB query to find the restaurant id, name, district and cuisine for those restaurants whcih contains 'Wil' as first three letters for its name.

```
db.restaurants.find({name: {$regex: "^Wil"}}, {restaurant_id:1, name:1, district:1, cuisine:1}).pretty(); // Found 3 documents

```

11. Write a MongoDB query to find the restaurant id, name, district and cuisine for those restaurants which contains 'ces' as last three letters for its name.

```
db.restaurants.find({name: {$regex: "ces$"}}, {restaurant_id:1, name:1, district:1, cuisine:1}).pretty(); // Found 6 documents

```

12. Write a MongoDB query to find the restaurant id, name, district and cuisine for those restaurants which contains 'Red' as three letters somewhrere in its name.

```
db.restaurants.find({name: {$regex: "Red"}}, {restaurant_id:1, name:1, district:1, cuisine:1}).pretty(); // Found 9 documents

```

13. Write a MongoDB query to find the resaurants which belongs to the district Bronx and prepared either American or Chinese dish.

```
db.restaurants.find({$or:[{cuisine:"American"}, {cuisine:"Chinese"}],district:"Bronx"}).pretty(); // Found 16 documents
db.restaurants.find({$or:[{cuisine:"American "}, {cuisine:"Chinese"}],district:"Bronx"}).pretty(); // Found 91 documents
db.restaurants.find({cuisine:{$in:["American ", "Chinese"]},district:"Bronx"}).pretty(); // Found 91 documents
```

14. 

```
db.restaurants.find({district:{$in:["Staten Island","Queens","Bronx","Brooklyn"]}}, {restaurant_id:1, name:1, district:1, cuisine:1}).pretty(); // Found 1889 documents
```

15. 

```
db.restaurants.find({district:{$nin:["Staten Isaland","Queens","Brooklyn"]}},{restaurant_id:1, name:1, district:1, cuisine:1}).tretty(); // Found 2350 documents
```

16. 

```
db.restaurants.find({"grades.score":{$lte:10}},{restaurant_id:1, name:1, district:1, cuisine:1}).pretty(); // Found 3529 documents
```

17. 

```
db.restaurants.find({"address.coord.1":{$gt:42, $lte:52}},{restaurant_id:1, name:1, address:1}).pretty(); // Found 7 documents
```

18. 

```
db.restaurants.find({},{}).sort({name:1}).pretty();
```

19. 

```
db.restaurants.find({},{}).sort({name:-1}).pretty();
```

20. 

```
db.restaurants.find({},{cuisine:1,district:1}).sort({cuisine:1,district:-1}).pretty();
```

21. 

```
db.restaurants.find({"address.street":{$exists: true}}).count(); // = 3772
db.restaurants.find().count(); // = 3772
```

22. 

```
db.restaurants.find({"address.coord":{$type:"double"}}).count(); // = 3772
```

23. 

```
db.restaurants.find({name: {$regex: "^Mad"}}, {name:1, district:1, cuisine:1,"address.coord":1}).pretty(); // Found 8 documents
```
