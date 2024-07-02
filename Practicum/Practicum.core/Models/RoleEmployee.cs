using Practicum.core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.core.Models
{
    public class RoleEmployee
    {
        public int Id { get; set; }

        public int IdEmployee { get; set; }

        public int IdRole { get; set; }

        //public Employee Employee { get; set; }

        //public Role Role { get; set; }

        public DateTime DateOfStart { get; set; }
    }
}
