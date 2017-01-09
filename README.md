apa itu angular?
angularjs adalah framework javascript yang membantu dan memudahkan dalam membuat UI aplikasi web.

Mengapa AngularJS
- Dependency Injection
- Two way databinding
- Testing
- MVC
- Directive, Filter, dll

Download Angularjs
www.angularjs.org

Hello World

File Separation

Module & Controller
apa itu module?
module adalah sebuah container dari bagian-bagian yang berbeda dari sebuah aplikasi, seperti controller, directive, service, filter, dll.

sederhananya module ini seperti method main kalau di Java atau C/C++.

Cara membuat module.
`var helloApp = angular.module('helloWorldApp', []);`
parameter pertama adalah nama dari module, dan parameter kedua yang berupa array merupakan dependency (jika ada) dari module tersebut.

apa itu angularjs controller?
Controller merupakan javascript function yang berguna untuk membangun sebuah model untuk ditampilkan.

Cara membuat controller.
```javascript
var helloController = function($scope) {
    $scope.nama = 'Hello World';
};
```

`$scope` merupakan parameter object dari angular yang akan memparsing model secara otomatis dari controller sehingga nantinya akan tersedia di view.

Setelah membuat controller, kita perlu menghubungkan controller dengan module supaya dikenali.
`helloApp.controller('helloController', helloController);`.
parameter pertama adalah nama controller, parameter kedua adalah nama variable dari controller yang telah dibuat.

Two-way data binding

ng-model directive bisa digunakan didalam:
- input
- select
- textarea

ng-repeat directive

Event Handling

Filter

Sorting data

Sort row by table header

Search filter

Filter by multiple properties

Custom Filter

ng-hide dan ng-show directive

ng-include directive

Angular Service

$anchorscroll service

$http Service

Routing

CRUD application

Controller as Syntax

Inline template

















