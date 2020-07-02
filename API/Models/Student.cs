using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace studentApi.Models
{
    public class Student 
    {
        [Key]
        public int StudentID { get; set; }

        [Column(TypeName = "nvarchar(150)")]
        public string FirstName { get; set; }

        [Column(TypeName = "nvarchar(150)")]
        public string MiddleName { get; set; }

        [Column(TypeName = "nvarchar(150)")]
        public string LastName { get; set; }
        public string Mobile { get; set; }
        public string Telephone { get; set; }

        public string Email { get; set; }
        
        [Column(TypeName = "nvarchar(350)")]
        public string Address { get; set; }
        public string DOB { get; set; }
        public string NIC { get; set; }

        public virtual ICollection<Enrollment> Enrollments { get; set; }
        
    }
}
