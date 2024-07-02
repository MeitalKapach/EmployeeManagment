using Practicum.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.core.Repositories
{
    public interface IRoleRepository
    {
        Task<List<Role>> GetListAsync();
        Task<Role> AddAsync(Role role);
        Task DeleteAsync(int id);
        Task<Role> GetByIdAsync(int id);
        Task<Role> UpdateAsync(int id, Role role);

    }
}
