var x = [ [5,2,3], [10,9,8]]

//change 10 -> 15 and print arrary
x[1][0] = 15;
console.log(x);




var students = [
    {'first_name': 'Michael', 'last_name': 'jordan'},
    {first_name: 'john', 'last_name': 'Rosales'}
]

//print michael jordan
console.log(students[0].first_name + students[0].last_name);
console.log(students[0].first_name, students[0].last_name);
console.log(students[0]['first_name'] + students[0]['last_name']);




var sportDirectory = {
    basketball: ['kobe','jordan', 'james', 'currry'],
    soccer: ['Messi', 'Ronaldo', 'Rooney']
}

//print messi
console.log(sportDirectory.soccer[0]);
console.log(sportDirectory['soccer'][0]);




var z = [{x:10, y:20}]

//print 20
console.log(z[0].y);
console.log(z[0]['y']);
