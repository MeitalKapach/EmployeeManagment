using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Practicum.API.Models;
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
    public class RoleController : ControllerBase
    {
        private readonly IRoleService _roleService;
        private readonly IMapper _mapper;

        public RoleController(IRoleService roleService,IMapper mapper)
        {
            _roleService = roleService;
            _mapper = mapper;
        }

        // GET: api/<RoleController>
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var getAll =await _roleService.GetAllAsync();
            var getByDTO = _mapper.Map<IEnumerable<RoleDTO>>(getAll);
            return Ok(getByDTO);
        }

        // GET api/<RoleController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Role>> Get(int id)
        {
            var role =await _roleService.GetByIdAsync(id);
            var roleDTO = _mapper.Map<RoleDTO>(role);
            return Ok(roleDTO);
        }

        // POST api/<RoleController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] RolePostModel value)
        {
            var roleToAdd=new Role { IsManegerial=value.IsManegerial,roleName=value.roleName};
            return Ok(await _roleService.AddAsync(roleToAdd));
        }

        // PUT api/<RoleController>/5
        [HttpPut("{id}")]
        public async Task Put(int id, [FromBody] Role value)
        {
          await  _roleService.UpdateAsync(id, value);
        }

        // DELETE api/<RoleController>/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
           await _roleService.DeleteAsync(id);
        }
    }
}
