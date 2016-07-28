using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngMVC.Models;
using System.Web.Script.Serialization;

namespace AngMVC.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetAllEmployee()
        {
            using (Model1 db = new Model1())
            {
                var employeeList = db.Employees.ToList();
                return Json(employeeList, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult GetEmployeeByID(string empID)
        {
            using (Model1 dataContext = new Model1())
            {
                int no = Convert.ToInt32(empID);
                var employeeList = dataContext.Employees.Find(no);
                return Json(employeeList, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public string AddEmployeeDetails(Employee emp)
        {
            //var json_serializer = new JavaScriptSerializer();
            //Employee empDetail = json_serializer.Deserialize<Employee>(EmpDetails);
            using (Model1 dataContext = new Model1())
            {
                if (emp != null)
                {
                    dataContext.Employees.Add(emp);
                    dataContext.SaveChanges();
                    return "Success";
                }
                else
                {
                    return "Invalid Entry";
                }
            }
        }

        public string UpdateEmployeeDetails(Employee emp)
        {
            using (Model1 dataContext = new Model1())
            {
                if (emp != null)
                {
                    int no = Convert.ToInt32(emp.EmployeeId);
                    var employeeList = dataContext.Employees.Where(id => id.EmployeeId == no).FirstOrDefault();
                    employeeList.EmailId = emp.EmailId;
                    employeeList.EmployeeName = emp.EmployeeName;
                    employeeList.Address = emp.Address;
                    dataContext.SaveChanges();
                    return "Success";
                }
                else
                {
                    return "Invalid Entry";
                }
            }
        }
        public string DeleteEmployeeDetails(Employee emp)
        {
            using (Model1 dataContext = new Model1())
            {
                if (emp != null)
                {
                    int no = Convert.ToInt32(emp.EmployeeId);
                    var employeeList = dataContext.Employees.Where(id => id.EmployeeId == no).FirstOrDefault();
                    dataContext.Employees.Remove(employeeList);
                    dataContext.SaveChanges();
                    return "Success";
                }
                else
                {
                    return "Invalid Entry";
                }
            }
        }
    }
}