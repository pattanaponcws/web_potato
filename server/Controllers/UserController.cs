using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server;
using server.Models;

namespace UserControllers;

[ApiController]
[Route("/api")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly ApplicationDbContext _dbContext;

    public UserController(ILogger<UserController> logger, ApplicationDbContext dbContext)
    {
        _logger = logger;
        _dbContext = dbContext;
    }

    [HttpGet("user")]
    public async Task<ActionResult<List<User>>> GetAllUser()
    {
        return await _dbContext.Users.ToListAsync();
    }

    [HttpGet("user/{id}")]
    public async Task<ActionResult<User?>> GetUser(Guid id)
    {
        return await _dbContext.Users.FirstOrDefaultAsync(u => u.Id == id);
    }

    [HttpPost("Signup")]
    public IActionResult Signup(AddUser signup)
    {
        var item = this._dbContext.Users.FirstOrDefault(o => o.Username == signup.username);
        if (item == null)
        {
            var obj = new User();
            obj.Username = signup.username;
            obj.Password = signup.password;
            obj.Email = signup.email;
            this._dbContext.Users.Add(obj);
            this._dbContext.SaveChanges();
            return Ok("Success");
//555
        }
        return Ok("no found token");
    }
}

