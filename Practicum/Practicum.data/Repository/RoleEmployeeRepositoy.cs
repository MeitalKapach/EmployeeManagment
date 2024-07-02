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
    public class RoleEmployeeRepositoy:IRoleEmployeeRepository
    {
        private readonly DataContext _dataContext;

        public RoleEmployeeRepositoy(DataContext dataContext)
        {
            if (dataContext == null)
            {
                throw new ArgumentNullException(nameof(dataContext));
            }

            _dataContext = dataContext;
        }

        public async Task<List<RoleEmployee>> GetListAsync()
        {
            if (_dataContext == null)
            {
                return new List<RoleEmployee>();
            }

            return await _dataContext.RoleEmployeeList.ToListAsync();
        }
        public async Task<RoleEmployee> AddAsync(RoleEmployee Roleemployee)
        {
            _dataContext.RoleEmployeeList.Add(Roleemployee);
            await _dataContext.SaveChangesAsync();
            return Roleemployee;
        }
        public async Task DeleteAsync(int id)
        {
            var e = GetByIdAsync(id);
            if (e == null)
                return;
            // e.Status = Status.Inactive;
            _dataContext.RoleEmployeeList.Remove(await e);
            await _dataContext.SaveChangesAsync();
        }

        public async Task<RoleEmployee> GetByIdAsync(int id)
        {
            return await _dataContext.RoleEmployeeList.FindAsync(id);
        }
        public async Task<RoleEmployee> UpdateAsync(int id, RoleEmployee Roleemployee)
        {
            var exist = await GetByIdAsync(id);

            //if (exist == null)
            //{
            //    // אם העובד לא קיים, יש לטפל בזה כאן
            //    throw new Exception("Role not found"); // או כל טיפול נוסף בהתאם לדרישות העסקיות
            //}
            //exist.IdEmployee = Roleemployee.IdEmployee;
            //exist.IdRole = Roleemployee.IdRole;
            //exist.DateOfStart = Roleemployee.DateOfStart;
            //exist.IdEmployee = Roleemployee.IdEmployee;

        await _dataContext.SaveChangesAsync();

            return exist;
        }
    }
}
