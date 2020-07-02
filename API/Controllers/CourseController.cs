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
    public class CourseController : ControllerBase
    {


        private readonly SchDbContext _context;

        public CourseController(SchDbContext context)
        {

            _context = context;
        }


        // GET All Courses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        {
            return await _context.Courses.ToListAsync();
        }

        // GET Selected Course
        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(int id)
        {
            var cid = await _context.Courses.FindAsync(id);

            if (cid == null)
            {
                return NotFound();
            }

            return cid;
        }

        //PUT: api/Course/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourse(int id, Course course)
        {
            if (id != course.CourseID)
            {
                return BadRequest();
            }
            _context.Entry(course).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseExists(id))
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
        //POST : /api/Course/Register
        public async Task<ActionResult<Course>> PostStudent(Course course)
        {
            _context.Courses.Add(course);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCourse", new { id = course.CourseID }, course);
        }

        //DELETE: api/Course/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Course>> DeleteCourse(int id)
        {
            var sid = await _context.Courses.FindAsync(id);

            if (sid == null)
            {
                return NotFound();
            }

            _context.Courses.Remove(sid);
            await _context.SaveChangesAsync();
            return sid;

        }

        private bool CourseExists(int id)
        {
            return _context.Courses.Any(e => e.CourseID == id);
        }


    }
}





