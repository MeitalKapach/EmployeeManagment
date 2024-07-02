using AutoMapper;
using Practicum.core.DTOs;
using Practicum.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.core
{
    public class MappingProFile:Profile
    {
        public MappingProFile()
        {
            CreateMap<EmployeeDTO,Employee>().ReverseMap();
CreateMap<RoleDTO,Role>().ReverseMap();
            CreateMap<RoleEmployeeDTO, RoleEmployee>().ReverseMap();

        }
    }
}
