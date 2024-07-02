using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practicum.core.Models
{        public enum RoleName
        {
            Teacher=1,
            KindergartenTeacher=2,
            Secretary=3,
            Programmer=4,

        }
    public class Role
    {
        public int Id { get; set; }
        public RoleName roleName { get; set; }
        public bool IsManegerial { get; set; }
    }




}
