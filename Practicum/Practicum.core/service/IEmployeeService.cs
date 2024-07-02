using Practicum.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.core.service
{
    public interface IEmployeeService
    {
        Task<List<Employee>> GetAllAsync();
        Task<Employee> UpdateAsync(int id, Employee employee);
        Task<Employee> GetByIdAsync(int id);
        Task DeleteAsync(int id);
        Task<Employee> AddAsync(Employee employee);
    }
}
