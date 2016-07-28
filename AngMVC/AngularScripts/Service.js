app.service("EmployeeService", function ($http) {
    this.getEmployee = function () {
        debugger;
        return $http.get("/employee/GetAllEmployee");
    };

    // get Employee By Id
    this.getEmployeeById = function (empID) {
        var response = $http({
            method: "post",
            url: "Employee/GetEmployeeByID",
            params: {
                id: JSON.stringify(empID)
            }
        });
        return response;
    }

    // Update Employee
    this.updateEmp = function (emp) {
        var response = $http({
            method: "post",
            url: "Employee/UpdateEmployeeDetails",
            data: JSON.stringify(emp),
            dataType: "json"
        });
        return response;
    }

    // Add Employee
    this.AddEmp = function (emp) {        
        var response = $http({
            method: "post",
            url: "Employee/AddEmployeeDetails",
            data: JSON.stringify(emp),
            dataType: "json"
        });
        return response;
    }

    //Delete Employee
    this.DeleteEmp = function (emp) {
        var response = $http({
            method: "post",
            url: "Employee/DeleteEmployeeDetails",
            params: {
                employeeId: JSON.stringify(emp)
            }
        });
        return response;
    }
});

