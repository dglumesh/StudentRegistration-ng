using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace studentApi.Models
{
    public class SchDbContext : DbContext

    {
       public SchDbContext(DbContextOptions<SchDbContext> options): base(options)
       {
           
       }
        public DbSet<Student> Students { get; set; }
        
        public DbSet<Course> Courses { get; set; }

        public DbSet<Enrollment> Enrollments { get; set; }

        
    }
}