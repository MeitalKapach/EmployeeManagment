using Practicum.core.Models;
using Practicum.core.Repositories;
using Practicum.core.service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.sevice
{
    public class RoleEmployeeService:IRoleEmployeeService
    {
        private readonly IRoleEmployeeRepository _roleemployeeRepository;
        public RoleEmployeeService(IRoleEmployeeRepository roleemployeeRepository)
        {
            _roleemployeeRepository = roleemployeeRepository;
        }

        public async Task<List<RoleEmployee>> GetAllAsync()
        {
            return await _roleemployeeRepository.GetListAsync();

        }
        public async Task<RoleEmployee> AddAsync(RoleEmployee roleemployee)
        {
            return await _roleemployeeRepository.AddAsync(roleemployee);
        }
        public async Task DeleteAsync(int id)
        {
            await _roleemployeeRepository.DeleteAsync(id);
        }
        public async Task<RoleEmployee> GetByIdAsync(int id)
        {
            return await _roleemployeeRepository.GetByIdAsync(id);
        }
        public async Task<RoleEmployee> UpdateAsync(int id, RoleEmployee Remployee)
        {
            RoleEmployee employeeToUpdate = await _roleemployeeRepository.UpdateAsync(id, Remployee);
            return employeeToUpdate;
        }
    }
}
