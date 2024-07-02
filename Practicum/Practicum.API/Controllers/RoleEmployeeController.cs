using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Practicum.API.Models;
using Practicum.core.DTOs;
using Practicum.core.Models;
using Practicum.core.service;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Practicum.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class RoleEmployeeController : ControllerBase
    {
        private readonly IRoleEmployeeService _roleemployeeService;
        // private readonly Mapping _mapping;
        private readonly IMapper _mapper;

        public RoleEmployeeController(IRoleEmployeeService employeeService, IMapper mapper)
        {
            _roleemployeeService = employeeService;
            _mapper = mapper;
        }

        // GET: api/<EmployeeController>
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var getAll = await _roleemployeeService.GetAllAsync();
            var getByDTO = _mapper.Map<IEnumerable<RoleEmployeeDTO>>(getAll);
            return Ok(getByDTO);
        }

        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RoleEmployee>> Get(int id)
        {
            var remployee = await _roleemployeeService.GetByIdAsync(id);
            var remployeeDTO = _mapper.Map<RoleEmployeeDTO>(remployee);
            return Ok(remployeeDTO);
        }

        // POST api/<EmployeeController>
        //[HttpPost]
        //public async Task<ActionResult> Post([FromBody] RoleEmployeePostModel remployee)
        //{
        //    var employeeToAdd = new RoleEmployee {Id=remployee.Id,IdEmployee=remployee.IdEmployee,IdRole=remployee.IdRole,DateOfStart=remployee.DateOfStart  };

        //    return Ok(await _roleemployeeService.AddAsync(employeeToAdd));
        //}

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public async Task Put(int id, [FromBody] RoleEmployee value)
        {
            await _roleemployeeService.UpdateAsync(id, value);
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await _roleemployeeService.DeleteAsync(id);
        }

    }
}
