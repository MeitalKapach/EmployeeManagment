using Practicum.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.core.Repositories
{
    public interface IEmployeeRepository
    {
        Task<List<Employee>> GetListAsync();
        Task<Employee> AddAsync(Employee employee);
         Task DeleteAsync(int id);
        Task<Employee> GetByIdAsync(int id);
        Task<Employee> UpdateAsync(int id, Employee employee);
    }
}
