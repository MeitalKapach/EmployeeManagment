using Practicum.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.core.DTOs
{
    public class EmployeeDTO
    {
        public int Id { get; set; }

        public string TZ { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public Status status { get; set; }

        public Gender Gender { get; set; }

        public DateTime DateOfStart { get; set; }

        public DateTime DateOfBirth { get; set; }

        public List<RoleEmployee> Roles { get; set; }
    }
}
