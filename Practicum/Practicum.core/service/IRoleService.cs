using Practicum.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.core.service
{
    public interface IRoleService
    {
        Task<List<Role>> GetAllAsync();
        Task<Role> UpdateAsync(int id, Role role);
        Task<Role> GetByIdAsync(int id);
        Task DeleteAsync(int id);
        Task<Role> AddAsync(Role role);
    }
}
