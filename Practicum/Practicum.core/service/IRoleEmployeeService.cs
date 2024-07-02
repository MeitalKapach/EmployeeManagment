using Practicum.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.core.service
{
    public interface IRoleEmployeeService
    {
        Task<List<RoleEmployee>> GetAllAsync();
        Task<RoleEmployee> UpdateAsync(int id, RoleEmployee roleemployee);
        Task<RoleEmployee> GetByIdAsync(int id);
        Task DeleteAsync(int id);
        Task<RoleEmployee> AddAsync(RoleEmployee roleemployee);
    }
}
