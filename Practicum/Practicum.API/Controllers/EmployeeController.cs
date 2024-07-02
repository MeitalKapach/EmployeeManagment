using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Practicum.API.Models;
using Practicum.core;
using Practicum.core.DTOs;
using Practicum.core.Models;
using Practicum.core.service;
using Practicum.sevice;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Practicum.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;
        // private readonly Mapping _mapping;
        private readonly IMapper _mapper;

        public EmployeeController(IEmployeeService employeeService, IMapper mapper)
        {
            _employeeService = employeeService;
            _mapper = mapper;
        }

        // GET: api/<EmployeeController>
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var getAll =await _employeeService.GetAllAsync();
            var getByDTO = _mapper.Map< IEnumerable< EmployeeDTO> >(getAll);
            return Ok(getByDTO);
        }

        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> Get(int id)
        {
            var employee =await _employeeService.GetByIdAsync(id);
            var employeeDTO=  _mapper.Map<EmployeeDTO>(employee);
            return Ok( employeeDTO);
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] EmployeePostModel employee)
        {
            var employeeToAdd = new Employee { FirstName = employee.FirstName, LastName = employee.LastName, TZ = employee.TZ, DateOfBirth = employee.DateOfBirth, DateOfStart = employee.DateOfStart, Gender = employee.Gender,  Password = employee.Password,status=employee.status,Roles= employee.Roles };

            return Ok(await _employeeService.AddAsync(employeeToAdd));
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public async Task Put(int id, [FromBody] EmployeePostModel employee)
        {
            var employeeToAdd = new Employee { FirstName = employee.FirstName, LastName = employee.LastName, TZ = employee.TZ, DateOfBirth = employee.DateOfBirth, DateOfStart = employee.DateOfStart, Gender = employee.Gender, Password = employee.Password, status = employee.status, Roles = employee.Roles };
            await _employeeService.UpdateAsync(id, employeeToAdd);
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
           await _employeeService.DeleteAsync(id);
        }

    }
}
