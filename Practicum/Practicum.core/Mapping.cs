using Practicum.core.DTOs;
using Practicum.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.core
{
    public class Mapping
    {
        public EmployeeDTO mapToEmployeeDTO(Employee employee)
        {
            return new EmployeeDTO { FirstName = employee.FirstName, LastName = employee.LastName, TZ = employee.TZ, DateOfBirth = employee.DateOfBirth, DateOfStart = employee.DateOfStart, Gender = employee.Gender, Id = employee.Id,status=employee.status};

        }
    }
}
