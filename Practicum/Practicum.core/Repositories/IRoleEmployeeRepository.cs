using Practicum.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.core.Repositories
{
    public interface IRoleEmployeeRepository
    {
        Task<List<RoleEmployee>> GetListAsync();
        Task<RoleEmployee> AddAsync(RoleEmployee roleemployee);
        Task DeleteAsync(int id);
        Task<RoleEmployee> GetByIdAsync(int id);
        Task<RoleEmployee> UpdateAsync(int id, RoleEmployee roleemployee);
    }
}
