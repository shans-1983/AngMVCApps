app.controller("EmpCtrl", function ($scope, EmployeeService) {

    GetAllEmployee();

    function GetAllEmployee() {

        debugger;
        var getAllEmployee = EmployeeService.getEmployee();
        getAllEmployee.then(function (emp) {
            $scope.employees = emp.data;
        }, function () {
            alert('Data not found');
        });
    }

    $scope.editEmployee = function (employee) {
        debugger;
        var getData = EmployeeService.getEmployeeById(employee.EmployeeId);
        getData.then(function (emp) {
            $scope.employee = emp.data;
            $scope.EmployeeId = employee.EmployeeId;
            $scope.EmployeeName = employee.EmployeeName;
            $scope.Address = employee.Address;
            $scope.EmailId = employee.EmailId;
            $scope.Action = "Update";
            $scope.divEmployee = true;
        },
        function () {
            alert('Error in getting records');
        });
    }

    $scope.AddUpdateEmployee = function () {
        debugger;
        var Employee = {
            EmployeeName: $scope.EmployeeName,
            EmailId: $scope.EmailId,
            Address: $scope.Address
        };
        var getAction = $scope.Action;

        if (getAction == "Update") {
            Employee.EmployeeId = $scope.EmployeeId;
            var getData = EmployeeService.updateEmp(Employee);
            getData.then(function (msg) {
                GetAllEmployee();
                alert(msg.data);
                $scope.divEmployee = false;
            }, function () {
                alert('Error in updating record');
            });
        } else {
            var getData = EmployeeService.AddEmp(Employee);
            getData.then(function (msg) {
                GetAllEmployee();
                alert(msg.data);
                $scope.divEmployee = false;
            }, function () {
                alert('Error in adding record');
            });
        }
    }

    $scope.AddEmployeeDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divEmployee = true;
        modal.style.display = "block";
    }

    $scope.deleteEmployee = function (employee) {
        var getData = EmployeeService.DeleteEmp(employee.EmployeeId);
        getData.then(function (msg) {
            GetAllEmployee();
            alert('Employee Deleted');
        }, function () {
            alert('Error in Deleting Record');
        });
    }

    function ClearFields() {
        $scope.EmployeeId = "";
        $scope.EmployeeName = "";
        $scope.EmailId = "";
        $scope.Address = "";
    }
});