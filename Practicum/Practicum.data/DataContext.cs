using Microsoft.EntityFrameworkCore;
using Practicum.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Practicum.core.Models.Role;

namespace Practicum.data
{
    public class DataContext:DbContext
    {
        public DbSet<Employee> EmployeeList { get; set; }
        public DbSet<Role> RoleList { get; set; }
        public DbSet<RoleEmployee> RoleEmployeeList { get; set; }
        //        public DataContext()
        //        {
        //            EmployeeList = new List<Employee>()
        //    {
        //        new Employee { FirstName = "Chaim", LastName = "Cohen", Id = "123", DateOfStart = new DateTime(2000, 1, 1) },
        //        new Employee { FirstName = "Sarah", LastName = "Levi", Id = "456", DateOfStart = new DateTime(2005, 2, 15) },
        //        new Employee { FirstName = "Meir", LastName = "Cohen", Id = "741", DateOfStart = new DateTime(2020, 5, 6) },
        //        new Employee { FirstName = "Meital", LastName = "Gold", Id = "740", DateOfStart = new DateTime(2022, 4, 9) },
        //        new Employee { FirstName = "Uri", LastName = "Fishman", Id = "654", DateOfStart = new DateTime(2005, 1, 1) },
        //        new Employee { FirstName = "Chava", LastName = "Shteren", Id = "849", DateOfStart = new DateTime(2006, 8, 22) },
        //        new Employee { FirstName = "Bati", LastName = "Sharabi", Id = "735", DateOfStart = new DateTime(2018, 5, 18) },
        //        new Employee { FirstName = "Orel", LastName = "Zadok", Id = "187", DateOfStart = new DateTime(2010, 1, 10) },
        //    };
        //            RoleList = new List<Role>()
        //{
        //  new Role { RoleId = 1},
        //  new Role { RoleId = 2}
        //};
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=my_db");
        }


    }

}
