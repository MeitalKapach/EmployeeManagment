using Microsoft.EntityFrameworkCore;
using Practicum.core.Models;
using Practicum.core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.data.Repository
{
    //public class EmployeeRepository: IEmployeeRepository
    //{
    //    private readonly DataContext _dataContext;
    //    public EmployeeRepository(DataContext dataContext)
    //    {
    //        dataContext = _dataContext;
    //    }
    //    public List<Employee> GetList()
    //    {
    //        return _dataContext.EmployeeList;
    //    }
    //}
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly DataContext _dataContext;

        public EmployeeRepository(DataContext dataContext)
        {
            if (dataContext == null)
            {
                throw new ArgumentNullException(nameof(dataContext));
            }

            _dataContext = dataContext;
        }

        public async Task<List<Employee>> GetListAsync()
        {
            if (_dataContext == null)
            {
                return new List<Employee>();
            }

            return await _dataContext.EmployeeList.ToListAsync();
        }
        public async Task<Employee> AddAsync(Employee employee)
        {
            _dataContext.EmployeeList.Add(employee);
            await _dataContext.SaveChangesAsync();
            return employee;
        }
        public async Task DeleteAsync(int id)
        {
            var exist = await GetByIdAsync(id);

            if (exist == null)
                return;
            exist.status = Status.Inactive;
      
            await _dataContext.SaveChangesAsync();
        }

        public async Task<Employee> GetByIdAsync(int id)
        {
            return await _dataContext.EmployeeList.FindAsync(id);
        }
        public async Task<Employee> UpdateAsync(int id, Employee employee)
        {
            var exist = await GetByIdAsync(id);

            if (exist == null)
            {
                // אם העובד לא קיים, יש לטפל בזה כאן
                throw new Exception("Employee not found"); // או כל טיפול נוסף בהתאם לדרישות העסקיות
            }

            exist.DateOfBirth = employee.DateOfBirth;
            exist.DateOfStart = employee.DateOfStart;
            exist.status = employee.status;
            exist.FirstName = employee.FirstName;
            exist.LastName = employee.LastName;
            exist.TZ = employee.TZ;
            exist.Gender = employee.Gender;
            exist.Roles = employee.Roles;
            exist.Password = employee.Password;
            exist.Roles = employee.Roles;
            await _dataContext.SaveChangesAsync();

            return exist;
        }


    }

}
