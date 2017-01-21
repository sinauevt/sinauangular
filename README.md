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

Selain expresi seperti diatas, berikut ini adalah contoh lain dari expression di Angularjs:
- {{ 1 == 1 }} - Akan bernilai true
- {{ { name: 'David', age : '30' }.name }} - Return nama dari property
- {{ ['Mark', 'David', 'Sara'][2] }} - Return elemen ke-2 dari array

Sample source code:
- chapter 1/helloworld.html.

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

```javascript
var helloApp = angular.module('helloWorldApp', []);

var helloController = function($scope) {
    $scope.firstName = 'Test';
    $scope.lastName = 'Name';
};

helloApp.controller('helloController', helloController);
```

```xml
<html ng-app="helloWorldApp">
    <head>
        <title>Controller</title>
    </head>
    <body>
        <div ng-controller="helloController">
            <input type="text" ng-model="firstName" placeholder="Masukkan first name"/>
            <input type="text" ng-model="lastName" placeholder="Masukkan last name"/>
            <h2> Halo, {{firstName + " " +lastName}} </h2>
        </div>

        <script src="../angular.js"></script>
        <script src="app1.js"></script>
    </body>
</html>
```

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

Tidak hanya textfield, `ng-model` directive bisa digunakan dikomponen lain:
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

### Bagaimana kalau nested array? ###

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

Event handling merupakan fungsi yang sangat penting didalam aplikasi web. Event handling menentukan behaviour dari web kita. Misalnya saat sebuah button diklik maka akan melakukan aksi apa.

```javascript
var app = angular
            .module("myModule", [])
            .controller("myController", function ($scope) {

                var technologies = [
                    { name: "C#", likes: 0, dislikes: 0 },
                    { name: "ASP.NET", likes: 0, dislikes: 0 },
                    { name: "SQL", likes: 0, dislikes: 0 },
                    { name: "AngularJS", likes: 0, dislikes: 0 }
                ];

                $scope.technologies = technologies;

                $scope.incrementLikes = function (technology) {
                    technology.likes++;
                };

                $scope.incrementDislikes = function (technology) {
                    technology.dislikes++;
                };
            });

```

```xml
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script src="../angular.js"></script>
    <script src="app6.js"></script>
</head>
<body ng-app="myModule">
    <div ng-controller="myController">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Likes</th>
                    <th>Dislikes</th>
                    <th>Like/Dislike</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="technology in technologies">
                    <td> {{ technology.name }} </td>
                    <td style="text-align:center"> {{ technology.likes }} </td>
                    <td style="text-align:center"> {{ technology.dislikes }} </td>
                    <td>
                        <input type="button" ng-click="incrementLikes(technology)" value="Like" />
                        <input type="button" ng-click="incrementDislikes(technology)" value="Dislike" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

Sample source code:
- chapter 3/controller6.html
- chapter 3/app6.js

## Filter ##

Filter di Angular dapat digunakan untuk melakukan 3 hal ini:
1. Format data
2. Sort data
3. Filter data

Filter dapat dipakai menggunakan binding expression. Untuk lebih jelasnya mari kita coba.

```javascript
var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var employees = [
                {
                    name: "Ben", dateOfBirth: new Date("November 23, 1980"),
                    gender: "Male", salary: 55000.788
                },
                {
                    name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                    gender: "Female", salary: 68000
                },
                {
                    name: "Mark", dateOfBirth: new Date("August 15, 1974"),
                    gender: "Male", salary: 57000
                },
                {
                    name: "Pam", dateOfBirth: new Date("October 27, 1979"),
                    gender: "Female", salary: 53000
                },
                {
                    name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                    gender: "Male", salary: 60000
                }
            ];

            $scope.employees = employees;
            $scope.rowCount = 3;
        });
```

```xml
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script src="../angular.js"></script>
    <script src="app7.js"></script>
</head>
<body ng-app="myModule">
    <div ng-controller="myController">
        Rows to display : <input type="number" step="1"
                                 ng-model="rowCount" max="5" min="0" />
        <br /><br />
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Salary (number filter)</th>
                    <th>Salary (currency filter)</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="employee in employees | limitTo:rowCount">
                    <td> {{ employee.name | uppercase }} </td>
                    <td> {{ employee.dateOfBirth | date:"dd/MM/yyyy" }} </td>
                    <td> {{ employee.gender }} </td>
                    <td> {{ employee.salary | number:2 }} </td>
                    <td> {{ employee.salary | currency : "£" : 1 }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

Sample source code:
- chapter 3/controller7.html
- chapter 3/app7.js

## Sorting data ##

Sorting atau pengurutan data merupakan komponen penting saat kita menampilkan data pada suatu table.

```javascript
var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var employees = [
                {
                    name: "Ben", dateOfBirth: new Date("November 23, 1980"),
                    gender: "Male", salary: 55000
                },
                {
                    name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                    gender: "Female", salary: 68000
                },
                {
                    name: "Mark", dateOfBirth: new Date("August 15, 1974"),
                    gender: "Male", salary: 57000
                },
                {
                    name: "Pam", dateOfBirth: new Date("October 27, 1979"),
                    gender: "Female", salary: 53000
                },
                {
                    name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                    gender: "Male", salary: 60000
                }
            ];

            $scope.employees = employees;
            $scope.sortColumn = "name";

        });
```

```xml
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script src="../angular.js"></script>
    <script src="app8.js"></script>
</head>
<body ng-app="myModule">
    <div ng-controller="myController">
        Sort By :
        <select ng-model="sortColumn">
            <option value="name">Name ASC</option>
            <option value="+dateOfBirth">Date of Birth ASC</option>
            <option value="+gender">Gender ASC</option>
            <option value="-salary">Salary DESC</option>
        </select>
        <br /><br />
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="employee in employees | orderBy:sortColumn">
                    <td>
                        {{ employee.name }}
                    </td>
                    <td>
                        {{ employee.dateOfBirth | date:"dd/MM/yyyy" }}
                    </td>
                    <td>
                        {{ employee.gender }}
                    </td>
                    <td>
                        {{ employee.salary  }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

Sample source code:
- chapter 3/controller8.html
- chapter 3/app8.js

## Sort row by table header ##

Pada contoh diatas kita men-sorting data menggunakan combobox yang mana kurang praktis. Kali ini kita akan membuat sorting kita lebih praktis, yaitu tinggal klik pada header kolom tabel.

```javascript
var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var employees = [
                {
                    name: "Ben", dateOfBirth: new Date("November 23, 1980"),
                    gender: "Male", salary: 55000
                },
                {
                    name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                    gender: "Female", salary: 68000
                },
                {
                    name: "Mark", dateOfBirth: new Date("August 15, 1974"),
                    gender: "Male", salary: 57000
                },
                {
                    name: "Pam", dateOfBirth: new Date("October 27, 1979"),
                    gender: "Female", salary: 53000
                },
                {
                    name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                    gender: "Male", salary: 60000
                }
            ];

            $scope.employees = employees;
            $scope.sortColumn = "name";
            $scope.reverseSort = false;

            $scope.sortData = function (column) {
                $scope.reverseSort = ($scope.sortColumn == column) ?
                    !$scope.reverseSort : false;
                $scope.sortColumn = column;
            }

            $scope.getSortClass = function (column) {

                if ($scope.sortColumn == column) {
                    return $scope.reverseSort
                      ? 'arrow-down'
                      : 'arrow-up';
                }

                return '';
            }
        });
```

```xml
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script src="../angular.js"></script>
    <script src="app9.js"></script>
</head>
<body ng-app="myModule">
    <div ng-controller="myController">
        <table>
            <thead>
                <tr>
                    <th ng-click="sortData('name')">
                        Name <div ng-class="getSortClass('name')"></div>
                    </th>
                    <th ng-click="sortData('dateOfBirth')">
                        Date of Birth <div ng-class="getSortClass('dateOfBirth')"></div>
                    </th>
                    <th ng-click="sortData('gender')">
                        Gender <div ng-class="getSortClass('gender')"></div>
                    </th>
                    <th ng-click="sortData('salary')">
                        Salary <div ng-class="getSortClass('salary')"></div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="employee in employees | orderBy:sortColumn:reverseSort">
                    <td> {{ employee.name }} </td>
                    <td> {{ employee.dateOfBirth | date:"dd/MM/yyyy" }} </td>
                    <td> {{ employee.gender }} </td>
                    <td> {{ employee.salary  }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

Sample source code:
- chapter 3/controller9.html
- chapter 3/app9.js

## Search filter ##

Setelah tadi kita mengurutkan data, sekarang kita akan mencoba mem-filter data. Filter sangat penting saat kita ingin mencari data tertentu didalam table.

```javascript
var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var employees = [
                { name: "Ben", gender: "Male", salary: 55000, city: "London" },
                { name: "Sara", gender: "Female", salary: 68000, city: "Chennai" },
                { name: "Mark", gender: "Male", salary: 57000, city: "London" },
                { name: "Pam", gender: "Female", salary: 53000, city: "Chennai" },
                { name: "Todd", gender: "Male", salary: 60000, city: "London" },
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
    <script src="app10.js"></script>
</head>
<body ng-app="myModule">
    <div ng-controller="myController">
        Search : <input type="text" placeholder="Search employees"
                        ng-model="searchText" />
        <br /><br />
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Salary</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="employee in employees | filter:searchText">
                    <td> {{ employee.name }} </td>
                    <td> {{ employee.gender }} </td>
                    <td> {{ employee.salary  }} </td>
                    <td> {{ employee.city  }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

Sample source code:
- chapter 4/controller10.html
- chapter 4/app10.js

## Filter by multiple properties ##

Terkadang kita hanya ingin mencari data dari kolom tertentu saja. Sekarang coba kita modifikasi pencarian yang telah kita buat..

```javascript
var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var employees = [
                { name: "Ben", gender: "Male", salary: 55000, city: "London" },
                { name: "Sara", gender: "Female", salary: 68000, city: "Chennai" },
                { name: "Mark", gender: "Male", salary: 57000, city: "London" },
                { name: "Pam", gender: "Female", salary: 53000, city: "Chennai" },
                { name: "Todd", gender: "Male", salary: 60000, city: "London" },
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
    <script src="app11.js"></script>
</head>
<body ng-app="myModule">
    <div ng-controller="myController">
        <input type="text" placeholder="Search name" ng-model="searchText.name" />
        <input type="text" placeholder="Search city" ng-model="searchText.city" />
        <input type="checkbox" ng-model="exactMatch" /> Exact Match
        <br /><br />
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Salary</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="employee in employees | filter: searchText : exactMatch">
                    <td> {{ employee.name }} </td>
                    <td> {{ employee.gender }} </td>
                    <td> {{ employee.salary  }} </td>
                    <td> {{ employee.city  }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

Sample source code:
- chapter 4/controller11.html
- chapter 4/app11.js

## Custom Filter ##

Misal kita punya data gender yang tidak dituliskan dengan huruf tapi dengan angka 1 atau 2. 1 untuk laki-laki dan 2 untuk perempuan. Bagaimana cara kita menampilkan supaya angka tersebut berubah menjadi huruf supaya dapat dipahami oleh pembaca.

Untuk melakukan ini kita membutuhkan yang namanya custom filter.

```javascript
var app = angular
        .module("myModule", [])
        .filter("gender", function () {
            return function (gender) {
                switch (gender) {
                    case 1:
                        return "Male";
                    case 2:
                        return "Female";
                    case 3:
                        return "Not disclosed";
                }
            }
        })
        .controller("myController", function ($scope) {

            var employees = [
                { name: "Ben", gender: 1, salary: 55000 },
                { name: "Sara", gender: 2, salary: 68000 },
                { name: "Mark", gender: 1, salary: 57000 },
                { name: "Pam", gender: 2, salary: 53000 },
                { name: "Todd", gender: 3, salary: 60000 }
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
    <script src="app12.js"></script>
</head>
<body ng-app="myModule">
    <div ng-controller="myController">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="employee in employees">
                    <td> {{ employee.name }} </td>
                    <td> {{ employee.gender | gender}} </td>
                    <td> {{ employee.salary  }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

Sample source code:
- chapter 4/controller12.html
- chapter 4/app12.js

## ng-hide dan ng-show directive ##

`ng-hide` dan `ng-show` merupakan directive yang berguna untuk mengatur visibility dari suatu komponen HTML.

```javascript
var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var employees = [
                { name: "Ben", gender: "Male", city: "London", salary: 55000 },
                { name: "Sara", gender: "Female", city: "Chennai", salary: 68000 },
                { name: "Mark", gender: "Male", city: "Chicago", salary: 57000 },
                { name: "Pam", gender: "Female", city: "London", salary: 53000 },
                { name: "Todd", gender: "Male", city: "Chennai", salary: 60000 }
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
    <script src="app13.js"></script>
</head>
<body ng-app="myModule">
    <div ng-controller="myController">
        <input type="checkbox" ng-model="hideSalary" />Hide Salary
        <br /><br />
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>City</th>
                    <th ng-hide="hideSalary">Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="employee in employees">
                    <td> {{ employee.name }} </td>
                    <td> {{ employee.gender}} </td>
                    <td> {{ employee.city}} </td>
                    <td ng-hide="hideSalary"> {{ employee.salary  }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

Sample source code:
- chapter 4/controller13.html
- chapter 4/app13.js

## ng-include directive ##

`ng-include` directive digunakan untuk menempelkan halaman HTML kedalam halaman HTML yang lain. Teknik ini sangat berguna saat kita memiliki tampilan yang dapat digunakan kembali / reuseable.

```javascript
var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var employees = [
                { name: "Ben", gender: "Male", salary: 55000 },
                { name: "Sara", gender: "Female", salary: 68000 },
                { name: "Mark", gender: "Male", salary: 57000 },
                { name: "Pam", gender: "Female", salary: 53000 },
                { name: "Todd", gender: "Male", salary: 60000 }
            ];

            $scope.employees = employees;
            $scope.employeeView = "EmployeeTable.html";
        });
```

```xml
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
</head>
<body ng-app="myModule">
    <div ng-controller="myController">
        Select View :
        <select ng-model="employeeView">
            <option value="EmployeeTable.html">Table</option>
            <option value="EmployeeList.html">List</option>
        </select>
        <br /><br />
        <div ng-include="employeeView">
        </div>
    </div>

    <script src="../angular.js"></script>
    <script src="app14.js"></script>
</body>
</html>
```

```xml
<!-- EmployeeList.html -->
<ul ng-repeat="employee in employees">
    <li>
        {{employee.name}}
        <ul>
            <li>{{employee.gender}}</li>
            <li>{{employee.salary}}</li>
        </ul>
    </li>
</ul>
```

```xml
<!-- EmployeeTable.html -->
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Salary</th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="employee in employees">
            <td> {{ employee.name }} </td>
            <td> {{ employee.gender}} </td>
            <td> {{ employee.salary}} </td>
        </tr>
    </tbody>
</table>
```

Saat kalian menjalankan ini pasti error. Kenapa? Karena kita tidak diijinkan untuk mengakses ng-include ini secara langsung dari folder. Tapi jangan khawatir, kita bukan orang pertama yang mengalami masalah ini. Sudah ada orang lain yang pernah mengalami dan sudah ada cara penyelesaiannya. Bisa dibaca diweb berikut [Error Occuring while including html file using ng-include](http://stackoverflow.com/questions/32951023/error-occuring-while-including-html-file-using-ng-include).

Mari kita coba solusi tersebut. Pertama kita harus install http-server terlebih dahulu menggunakan perintah `npm install http-server -g`. Perintah ini digunakan untuk menginstall web server seperti apache dilocal komputer kita. Ini karena fitur Angular yang akan kita coba membutuhkan server untuk dijalankan.

Setelah proses install selesai kita jalankan server dengan perintah `http-server`. Saat mengeksekusi perintah tersebut pastikan direktori kita berada di folder yang akan kita jalankan.

Sample source code:
- chapter 4/controller14.html
- chapter 4/app14.js
- chapter 4/EmployeeList.html
- chapter 4/EmployeeTable.js

## Routing ##

Seiring berjalannya waktu, suatu aplikasi biasanya akan semakin komplex dan memiliki tampilan lebih dari satu. Misal kita membuat aplikasi web berbasis SPA dan memiliki tampilan seperti berikut.
 - Home
 - Courses

Untuk membuat aplikasi web SPA kita dapat memanfaatkan fitur routing dari Angular.

```javascript
var app = angular
            .module("Demo", ["ngRoute"])
            .config(function ($routeProvider) {
                $routeProvider
                    .when("/", {
                        controller: "homeController",
                        templateUrl: "home.html"
                    })
                    .when("/home", {
                        controller: "homeController",
                        templateUrl: "home.html"
                    })
                    .when("/courses", {
                        controller: "coursesController",
                        templateUrl: "courses.html"
                    })
            })
            .controller("homeController", function ($scope) {
                $scope.message = "Home Page";
            })
            .controller("coursesController", function ($scope) {
                $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
            })
```

```xml
<!DOCTYPE html>
<html ng-app="Demo">
<head>
    <title></title>
    <link href="style.css" rel="stylesheet" />
</head>
<body>
    <table style="font-family: Arial">
        <tr>
            <td colspan="2" class="header">
                <h1>
                    WebSite Header
                </h1>
            </td>
        </tr>
        <tr>
            <td class="leftMenu">
                <a href="#!/home">Home</a>
                <a href="#!/courses">Courses</a>
            </td>
            <td class="mainContent">
                <div ng-view></div>
            </td>
        </tr>
        <tr>
            <td colspan="2" class="footer">
                <b>Website Footer</b>
            </td>
        </tr>
    </table>

    <script src="../angular.js"></script>
    <script src="../angular-route.js"></script>
    <script src="app15.js"></script>
</body>
</html>
```

```xml
<!-- home.html -->
<h1>{{message}}</h1>

<div>
    Test Established in 2000 by 3 S/W engineers offers very cost effective training. Test Speciality in training arena unlike other training institutions
</div>
<ul>
    <li>Training delivered by real time software experts having more than 10 years of experience.</li>
    <li>Realtime projects discussion relating to the possible interview questions.</li>
    <li>Trainees can attend training and use lab untill you get a job.</li>
    <li>Resume preperation and mock up interviews.</li>
    <li>100% placement assistance.</li>
    <li>Lab facility.</li>
</ul>
```

```xml
<!-- courses.html -->
<h1>Courses we offer</h1>
<ul>
    <li ng-repeat="course in courses">
        {{course}}
    </li>
</ul>
```

```css
// style.css
.header {
    width: 800px;
    height: 80px;
    text-align: center;
    background-color: #BDBDBD;
}

.footer {
    background-color: #BDBDBD;
    text-align: center;
}

.leftMenu {
    height: 500px;
    background-color: #D8D8D8;
    width: 150px;
}

.mainContent {
    height: 500px;
    background-color: #E6E6E6;
    width: 650px;
}

a{
    display:block;
    padding:5px
}
```

Saat kalian jalankan kemungkinan akan kena error atau tidak berfungsi. Untuk menjalankan Angular routing kita memerlukan server.

Kita tidak perlu menginstall apapun karena pada contoh yang sebelumnya kita sudah melakukan proses instalasi. Sekarang kita tinggal jalankan server dengan perintah `http-server`.

Sample source code:
- chapter 5/controller15.html
- chapter 5/app15.js
- chapter 5/home.html
- chapter 5/courses.html
- chapter 5/style.css

## Angular Service ##

Ketika kita membuat suatu aplikasi web biasanya kita akan mendapatkan data dari server. Data dari server tersebut kita ambil dan kita tampilkan dihalaman web.

### $http Service ###

Fitur untuk berkomunikasi dan mengambil data dari server ini disebut service di Angular. Dan untuk melakukannya kita akan menggunakan object `$http` yang telah disediakan oleh Angular.

Saya sudah membuatkan sample aplikasi server / yang biasa kita sebut sebagai aplikasi backend. Aplikasi ini sederhana hanya berfungsi untuk menyediakan data-data mahasiswa yang nantinya akan diambil oleh Angular.

Aplikasi backend ini ada di folder `chapter 6/cobaboot`. Untuk menjalankan sample program ini cukup jalankan perintah berikut `java -jar gs-spring-boot-0.1.0.jar`. Pastikan JDK sudah terinstall dan terdaftar di path variable komputer kita.

```javascript
var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope, $http) {

            $http.get("http://localhost:8081/students")
                 .then(function (response) {
                     $scope.students = response.data;
                 });
        });

```

```xml
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script src="../angular.js"></script>
    <script src="app16.js"></script>
</head>
<body ng-app="myModule">
    <div ng-controller="myController">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="student in students">
                    <td>{{student.id}}</td>
                    <td>{{student.name}}</td>
                    <td>{{student.course}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

Jangan lupa run server Angular dengan perintah `http-server`. Karena fitur Angular yang satu ini juga membutuhkan server untuk menjalankannya.

Sample source code:
- chapter 6/controller16.html
- chapter 6/app16.js
- chapter 6/cobaboot

















