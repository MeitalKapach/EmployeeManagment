using Practicum.core.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.core.Models
{
    public enum Gender
    {

        Male, Female

    }

    public enum Status
    {

        Active, Inactive

    }
    public class Employee
    {
        public int Id { get; set; }

        public string TZ { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Password { get; set; }

        public Status status { get; set; }

        public Gender Gender { get; set; }

        public DateTime DateOfStart { get; set; }

        public DateTime DateOfBirth { get; set; }


        public List<RoleEmployee> Roles { get; set; }
    }
}