using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace studentApi.Models
{
    public class Course 
    {
        [Key]
        public int CourseID { get; set; }

        public string CourseName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }


         public virtual ICollection<Enrollment> Enrollments { get; set; }
        
    }
}
