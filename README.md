# Sinau AngularJS #

Perkembangan technology sekarang ini semakin canggih terutama didunia pemrograman. Dahulu untuk membuat web kita mengenal namanya client-server application, kemudian smartphone mulai digunakan banyak orang yang membuat aplikasi web harus menyesuaikan supaya cepat dan dapat menyesuaikan saat dibuka di smartphone.

Kemudian dibuatlah konsep baru yang bernama SPA (Single Page Application) yang membuat halaman web kita tampak lebih responsif karena hanya akan memproses bagian yang berubah saja. Salah satu framework SPA ini adalah Angularjs.

## Apa itu Angularjs? ##

Angularjs adalah framework javascript yang membantu dan memudahkan dalam membuat UI aplikasi web. Angularjs dibuat oleh google dan dapat digunakan secara free.

Banyak web yang dibuat menggunakan Angularjs ini, kita bisa melihat daftar situs apa saja yang telah dibuat menggunakan Angularjs disini: [MadeWithAngular](https://www.madewithangular.com).

## Mengapa AngularJS ##

Banyak fitur:
- SPA
- Two way databinding
- Testing
- MVC
- Directive, Filter, dll

Selain itu juga dukungan komunitas yang besar. Ini menguntungkan kita saat kita sedang mengalami kesulitan akan ada banyak orang diluar sana yang dapat membantu kita.

## Download Angularjs ##

Angularjs dapat didownload secara gratis dialamat berikut [Angularjs](http://www.angularjs.org).

## Hello World ##

Mari kita mulai. Seperti biasa untuk belajar sesuatu kita harus mulai dari Hello World terlebih dahulu.

```xml
<html ng-app="helloWorldApp">
    <head>
        <title>Hello World</title>
    </head>
    <body>
        <script src="../angular.min.js"></script>
        <script>
            var helloApp = angular.module("helloWorldApp", []);
        </script>

        <input type="text" ng-model="nama" placeholder="Masukkan nama anda"/>
        <h2> Halo, {{nama}} </h2>
        <h2>{{2 + 2}}</h2>
    </body>
</html>
```

Sample source code: chapter 1/helloworld.html.

Dibawah ini adalah contoh dari expression di Angularjs:
- {{ 1 == 1 }} - Akan bernilai true
- {{ { name: 'David', age : '30' }.name }} - Return nama dari property
- {{ ['Mark', 'David', 'Sara'][2] }} - Return elemen ke-2 dari array

## Module & Controller ##

### Apa itu module? ###

Module adalah sebuah container dari bagian-bagian yang berbeda dari sebuah aplikasi, seperti controller, directive, service, filter, dll.

Sederhananya module ini seperti method main kalau di Java atau C/C++.

### Cara membuat module ###

Berikut adalah cara untuk membuat module: `var helloApp = angular.module('helloWorldApp', []);`.

Parameter pertama adalah nama dari module, dan parameter kedua yang berupa array merupakan dependency (jika ada) dari module tersebut.

### Apa itu controller? ###

Controller merupakan javascript function yang berguna untuk membangun sebuah model untuk ditampilkan.

### Cara membuat controller ###

```javascript
var helloController = function($scope) {
    $scope.nama = 'Hello World';
};
```

`$scope` merupakan parameter object dari angular yang akan memparsing model secara otomatis dari controller sehingga nantinya akan tersedia di view.

Setelah membuat controller, kita perlu menghubungkan controller dengan module supaya dikenali `helloApp.controller('helloController', helloController);`. Parameter pertama adalah nama controller, parameter kedua adalah nama variable dari controller yang telah dibuat.

## File Separation ##

Pada contoh hello world kita tadi file javascript masih jadi satu dengan html. Sekarang kita akan coba untuk memisahkan antara HTML dengan javascript nya.

Sample source code:
- chapter 2/controller1.html
- chapter 2/app1.js

## ng-src Directive ##

Suatu ketika kita mendapatkan data dan data tersebut berisi serangkaian property yang salah satunya berisi alamat dari gambar yang akan ditampilkan dihalaman HTML.

```javascript
var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var country = {
                        name: "United States of America",
                        capital: "Washington, D.C.",
                        flag: "captain-shield.png"
                    };
                    $scope.country = country;
                });

```

```xml
<!doctype html>
<html ng-app="myModule">
<head>
    <script src="../angular.js"></script>
    <script src="app2.js"></script>
</head>
<body>
    <div ng-controller="myController">
        <div>
            Country : {{ country.name }}
        </div>
        <div>
            Capital : {{ country.capital }}
        </div>
        <div>
            <img src="{{ country.flag }}"
                 alt="{{ country.name + ' Flag' }}"
                 style="height:500px; width:500px" />
        </div>
    </div>
</body>
</html>
 ```

Kalau kita lihat di developer tools di browser (di chrome klik F12) akan muncul error. Ini dikarenakan saat diload pertama kali, browser bingung menterjemahkan bagian ini `img src="{{ country.flag }}"`. Ini dikarenakan data dari Agnular belum siap saat html line tersebut dirender oleh browser.

Bagaimana solusinya? Kita ganti `img src` tersebut menggunakan `ng-src`.

```xml
<!doctype html>
<html ng-app="myModule">
<head>
    <script src="../angular.js"></script>
    <script src="app2.js"></script>
</head>
<body>
    <div ng-controller="myController">
        <div>
            Country : {{ country.name }}
        </div>
        <div>
            Capital : {{ country.capital }}
        </div>
        <div>
            <img ng-src="{{ country.flag }}"
                 alt="{{ country.name + ' Flag' }}"
                 style="height:500px; width:500px" />
        </div>
    </div>
</body>
</html>
```

Sample source code:
- chapter 2/controller2.html
- chapter 2/app2.js

## Two-way data binding ##

Ketika model kita definisikan nilainya, secara otomatis pada bagian view akan terupdate nilainya saat menggunakan angular data binding.

Bagaimana kalau kita ingin mengupdate nilai dari suatu model didalam view dan secara otomatis akan mengupdate nilai dari modelnya juga? Ini adalah yang dinamakan dengan two-way data binding. Untuk melakukan ini kita dapat menggunakan `ng-model`.

```javascript
var app = angular
            .module("myModule", [])
            .controller("myController", function ($scope) {
                var employee = {
                    firstName: "Ben",
                    lastName: "Hastings",
                    gender: "Male"
                };

                $scope.employee = employee;
            });
```

```xml
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script src="../angular.js"></script>
    <script src="app3.js"></script>
</head>
<body ng-app="myModule">
    <div ng-controller="myController">
        <table>
            <tr>
                <td>
                    First Name
                </td>
                <td>
                    <input type="text" placeholder="Firstname"
                           ng-model="employee.firstName" />
                </td>
            </tr>
            <tr>
                <td>
                    Last Name
                </td>
                <td>
                    <input type="text" placeholder="Lastname"
                           ng-model="employee.lastName" />
                </td>
            </tr>
            <tr>
                <td>
                    Gender
                </td>
                <td>
                    <input type="text" placeholder="Gender"
                           ng-model="employee.gender" />
                </td>
            </tr>
        </table>

        <br />

        <table>
            <tr>
                <td>
                    First Name
                </td>
                <td>
                    {{ employee.firstName }}
                </td>
            </tr>
            <tr>
                <td>
                    Last Name
                </td>
                <td>
                    {{ employee.lastName }}
                </td>
            </tr>
            <tr>
                <td>
                    Gender
                </td>
                <td>
                    {{ employee.gender }}
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
```

`ng-model` directive bisa digunakan didalam:
- input
- select
- textarea

Sample source code:
- chapter 2/controller3.html
- chapter 2/app3.js

## ng-repeat directive ##

Suatu ketika kita memiliki data berupa array. Bagaimana cara kita menampilkannya? Kali ini kita akan menggunakan directive yang bernama `ng-repeat`.

```javascript
var app = angular
            .module("myModule", [])
            .controller("myController", function ($scope) {

                var employees = [
                    { firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000 },
                    { firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000 },
                    { firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000 },
                    { firstName: "Pam", lastName: "Macintosh", gender: "Female", salary: 53000 },
                    { firstName: "Todd", lastName: "Barber", gender: "Male", salary: 60000 }
                ];

                $scope.employees = employees;
            });
```

```xml
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script src="../angular.js"></script>
    <script src="app4.js"></script>
</head>
<body ng-app="myModule">
    <div ng-controller="myController">
        <table>
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Gender</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="employee in employees">
                    <td> {{ employee.firstName }} </td>
                    <td> {{ employee.lastName }} </td>
                    <td> {{ employee.gender }} </td>
                    <td> {{ employee.salary }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

Sample source code:
- chapter 2/controller4.html
- chapter 2/app4.js

Bagaimana kalau nested array?

```javascript
var app = angular
            .module("myModule", [])
            .controller("myController", function ($scope) {

                var countries = [
                    {
                        name: "UK",
                        cities: [
                            { name: "London" },
                            { name: "Birmingham" },
                            { name: "Manchester" }
                        ]
                    },
                    {
                        name: "USA",
                        cities: [
                            { name: "Los Angeles" },
                            { name: "Chicago" },
                            { name: "Houston" }
                        ]
                    },
                    {
                        name: "India",
                        cities: [
                            { name: "Hyderabad" },
                            { name: "Chennai" },
                            { name: "Mumbai" }
                        ]
                    }
                ];

                $scope.countries = countries;
            });
```

```xml
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script src="../angular.js"></script>
    <script src="app5.js"></script>
</head>
<body ng-app="myModule">
    <div ng-controller="myController">
        <ul ng-repeat="country in countries">
            <li>
                {{country.name}}
                <ul>
                    <li ng-repeat="city in country.cities">
                        {{city.name}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</body>
</html>
```

Sample source code:
- chapter 2/controller5.html
- chapter 2/app5.js

## Event Handling ##

Like button

Sample source code:
- chapter 3/controller6.html
- chapter 3/app6.js

## Filter ##

Filters in angular can do 3 different things
1. Format data
2. Sort data
3. Filter data

Filters can be used with a binding expression or a directive

To apply a filter use pipe (|) character

Sample source code:
- chapter 3/controller7.html
- chapter 3/app7.js

## Sorting data ##

Terkadang kita perlu untuk mengurutkan data pada suatu table.

Sample source code:
- chapter 3/controller8.html
- chapter 3/app8.js

## Sort row by table header ##

Kali ini kita akan membuat sorting kita lebih praktis, yaitu tinggal klik pada header kolom tabel.



Sample source code:
- chapter 3/controller9.html
- chapter 3/app9.js

## Search filter ##



Sample source code:
- chapter 4/controller10.html
- chapter 4/app10.js

## Filter by multiple properties ##



Sample source code:
- chapter 4/controller11.html
- chapter 4/app11.js

## Custom Filter ##



Sample source code:
- chapter 4/controller12.html
- chapter 4/app12.js

## ng-hide dan ng-show directive ##



Sample source code:
- chapter 4/controller13.html
- chapter 4/app13.js

## ng-include directive ##

ng-include directive is used to embed an HTML page into another HTML page. This technique is extremely useful when you want to reuse a specific view in multiple pages in your application. 

The value of ng-include directive can be the name of the HTML page that you want to reuse or a property on the $scope object that points to the reusable HTML page.


Saat kalian menjalankan ini pasti error. Kenapa? Karena kita tidak diijinkan untuk mengakses ng-include ini secara langsung dari folder. Tapi jangan khawatir, kita bukan orang pertama yang mengalami hal ini. SUdah ada orang lain yang pernah mengalami dan sudah ada cara penyelesaiannya. Bisa dibaca diweb berikut [Error Occuring while including html file using ng-include](http://stackoverflow.com/questions/32951023/error-occuring-while-including-html-file-using-ng-include).

Mari kita coba solusi tersebut. Pertama kita harus install http-server terlebih dahulu menggunakan perintah `npm install http-server -g`.

Sample source code:
- chapter 4/controller14.html
- chapter 4/app14.js
- chapter 4/EmployeeList.html
- chapter 4/EmployeeTable.js


## Angular Service ##

## $anchorscroll service ##

## $http Service ##

## Routing ##

In general, as the application becomes complex you will have more than one view in the application. Let's say you are building a single page application for a training institute and you have the following views
 - Home
 - Courses
 - Students

We can take advantage of the Angular routing feature, to have a single layout page, and then inject and swap out different views depending on the URL the end user has requested.



In our next video, we will discuss creating the partial templates i.e home.html, courses.html and students.html.

Sample source code:
- chapter 5/controller15.html
- chapter 5/app15.js
- chapter 5/home.html
- chapter 5/course.html
- chapter 5/students.html

















