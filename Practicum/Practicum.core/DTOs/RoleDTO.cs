using Practicum.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.core.DTOs
{
    public class RoleDTO
    {
        public int Id { get; set; }
        public RoleName roleName { get; set; }
        public string Name { get; set; }
        public bool IsManegerial { get; set; }
    }
}
