using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server;
using server.Models;
using System.IdentityModel.Tokens.Jwt;
namespace UserControllers;

[ApiController]
[Route("/api")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly ApplicationDbContext _dbContext;
    private readonly IHttpContextAccessor _httpContextAccessor;
    public UserController(ILogger<UserController> logger, ApplicationDbContext dbContext ,IHttpContextAccessor httpContextAccessor)
    {
        _logger = logger;
        _dbContext = dbContext;
        _httpContextAccessor = httpContextAccessor;
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
    [HttpGet("userJWT")]
    public async Task<ActionResult<List<Accept>>> GetuserJWT()
    {
        
        var httpRequest = _httpContextAccessor.HttpContext.Request;
        var authorizationHeader = httpRequest.Headers["Authorization"].ToString();
            
        if (!string.IsNullOrEmpty(authorizationHeader) && authorizationHeader.StartsWith("Bearer "))
        {
            var tokenString = authorizationHeader.Substring("Bearer ".Length).Trim();
            var handler = new JwtSecurityTokenHandler();
            var token = handler.ReadJwtToken(tokenString);
            // Access the claims in the token
            var username = token.Payload["unique_name"];

            var user = this._dbContext.Users.FirstOrDefault(o => o.Username == username);
            return Ok(user);
        }
        return Ok("no found token");
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
            obj.Displayname = signup.username;
            this._dbContext.Users.Add(obj);
            this._dbContext.SaveChanges();
            return Ok("Success");
//555
        }
        return Ok("no found token");
    }
}

