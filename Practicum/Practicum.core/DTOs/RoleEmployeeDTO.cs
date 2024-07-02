using Practicum.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.core.DTOs
{
    public class RoleEmployeeDTO
    {
        public RoleDTO Role { get; set; }

        public DateTime DateOfStart { get; set; }
    }
}
