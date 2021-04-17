using api.Data;
using api.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly DataContext _context;

        public AuthController(DataContext context)
        {
            _context = context;
        }

        // POST api/<AuthController>
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            var item = _context.Accounts.FirstOrDefault(x => x.Username == request.Username && x.Password == request.Password);
            if (item == null)
                return NotFound();
            return Ok(item);
        }

        // POST api/<AuthController>
        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterRequest request)
        {
            var item = new Account(request.Username, request.Password);

            try
            {
                _context.Accounts.Add(item);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Accounts);
        }

        [HttpGet("id")]
        public IActionResult Get(int id)
        {
            return Ok(_context.Accounts.Find(id));
        }
    }
}
