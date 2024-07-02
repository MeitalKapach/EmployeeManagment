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
    public class RoleRepository: IRoleRepository
    {
        private readonly DataContext _dataContext;

        public RoleRepository(DataContext dataContext)
        {
            if (dataContext == null)
            {
                throw new ArgumentNullException(nameof(dataContext));
            }

            _dataContext = dataContext;
        }

        public async Task<List<Role>> GetListAsync()
        {
            if (_dataContext == null)
            {
                return new List<Role>();
            }

            return await _dataContext.RoleList.ToListAsync();
        }
        public async Task<Role> AddAsync(Role role)
        {
            _dataContext.RoleList.Add(role);
           await _dataContext.SaveChangesAsync();
            return  role;
        }
        public async Task DeleteAsync(int id)
        {
            var e = GetByIdAsync(id);
            _dataContext.RoleList.Remove(await e);
           await _dataContext.SaveChangesAsync();
        }

        public async Task<Role> GetByIdAsync(int id)
        {
            return await _dataContext.RoleList.FindAsync(id);
        }
        public async Task<Role> UpdateAsync(int id, Role role)
        {
            var exist = await GetByIdAsync(id);

            if (exist == null)
            {
                throw new Exception("Employee not found");  
            }

            exist.roleName = role.roleName;
            exist.IsManegerial = role.IsManegerial;
            await _dataContext.SaveChangesAsync();

            return exist;

        }
    }
}
