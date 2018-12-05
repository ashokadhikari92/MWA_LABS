Create a NoSQL design model for an application to manage a library, taking into consideration the following requirements: 

* Books have an ISBN number and are categoriezed by author and tagged by keyworkds facilitate search.    
* Books can be borrowed by students, so the librarian will be able to check all borrowed books and their return date so he may cntact students who are late returning their books.

NoSQl Model design for above requirments

```
{
    _id: ObjectId(),
    title: 'Modern Web Application',
    isbn: 'MWA34908',
    author: {name:'Asaad Saad', email: 'asaadsaad@mum.edu'},
    keywords: ['Modern','Web','Application'],
    borrowed: true,
    borrowed_by: {name:'Ashok Adhikari',email:'ashokadhikari@mum.edu',id:987654},
    borrowed_date: new Date('Nov 4 2018'),
    returned_date: new Date('Dec 4 2018')
}

```


Lab8 Exercise

Revisit Homework07 and write down your suggestiong to tune your Library application performance. (Indexes).

I will create indexes on the following fields
 - borrowed
 - returned_date