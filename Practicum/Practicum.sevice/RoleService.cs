using Practicum.core.Models;
using Practicum.core.Repositories;
using Practicum.core.service;
using Practicum.data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.sevice
{
    public class RoleService:IRoleService
    {
        private readonly IRoleRepository _RoleRepository;
        public RoleService(IRoleRepository roleRepository)
        {
            _RoleRepository = roleRepository;
        }
        public async Task<List<Role>> GetAllAsync()
        {
            return await _RoleRepository.GetListAsync();

        }
        public async Task<Role> AddAsync(Role role)
        {
            return await _RoleRepository.AddAsync(role);
        }
        public async Task DeleteAsync(int id)
        {
          await  _RoleRepository.DeleteAsync(id);
        }
        public async Task<Role> GetByIdAsync(int id)
        {
            return await _RoleRepository.GetByIdAsync(id);
        }
        public async Task<Role> UpdateAsync(int id, Role role)
        {
            Role roleToUpdate =await _RoleRepository.UpdateAsync(id, role);
            return roleToUpdate;
        }
    }
}
