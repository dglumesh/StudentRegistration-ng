using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using studentApi.Models;

namespace studentApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnrollmentController : ControllerBase
    {


        private readonly SchDbContext _context;

        public EnrollmentController(SchDbContext context)
        {

            _context = context;
        }


        // GET All Enrollment
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Enrollment>>> GetEnrollments()
        {



            return await _context.Enrollments.ToListAsync();
        }



        [HttpGet]
        [Route("Enroll")]
        public dynamic GetEnrollmentList()
        {
            var query = from x in _context.Enrollments
                        join y in _context.Courses on x.CourseID equals y.CourseID
                        join s in _context.Students on x.StudentID equals s.StudentID
                        select new
                        {
                            fName = x.Student.FirstName,
                            cName = x.Course.CourseName,
                            eName = x.EnrollmentID

                        };
            return query.ToList();

        }






        // GET Selected Enrollment
        [HttpGet("{id}")]
        public async Task<ActionResult<Enrollment>> GetEnrollment(int id)
        {
            var eid = await _context.Enrollments.FindAsync(id);

            if (eid == null)
            {
                return NotFound();
            }

            return eid;
        }

        //PUT: api/Enrollment/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEnrollment(int id, Enrollment enrollment)
        {
            if (id != enrollment.EnrollmentID)
            {
                return BadRequest();
            }
            _context.Entry(enrollment).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EnrollmentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        [HttpPost]
        // [Route("Register")]
        //POST : /api/Enrollment/Register
        public async Task<ActionResult<Enrollment>> PostEnrollment(Enrollment enrollment)
        {
            _context.Enrollments.Add(enrollment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEnrollment", new { id = enrollment.EnrollmentID }, enrollment);
        }

        //DELETE: api/Enrollment/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Enrollment>> DeleteEnrollment(int id)
        {
            var eid = await _context.Enrollments.FindAsync(id);

            if (eid == null)
            {
                return NotFound();
            }

            _context.Enrollments.Remove(eid);
            await _context.SaveChangesAsync();
            return eid;

        }

        private bool EnrollmentExists(int id)
        {
            return _context.Enrollments.Any(e => e.EnrollmentID == id);
        }


    }
}





