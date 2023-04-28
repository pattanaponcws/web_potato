using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Mysqlx;
using server.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Security.Claims;

namespace server.Controllers;

//[Authorize]
[ApiController]
[Route("[controller]")]

public class AuthController : ControllerBase
{
    private readonly ApplicationDbContext _DbContext ;
    private readonly JwtSettings jwtSettings;
    public AuthController(ApplicationDbContext app_DbContext, IOptions<JwtSettings> options)
    {
        this._DbContext = app_DbContext;
        this.jwtSettings = options.Value;
    }
    [HttpPost("Authenticate")]
    public async Task<IActionResult> Authenticate([FromBody]UserCred userCred)
    {
        var user = await this._DbContext.Users.FirstOrDefaultAsync(item =>
            (item.Username == userCred.username || item.Email == userCred.username) && item.Password == userCred.password);
        if (user == null)
            return Unauthorized();
        var tokenhandler = new JwtSecurityTokenHandler();
        var tokenkey = Encoding.UTF8.GetBytes(this.jwtSettings.securitykey);
        var tokendesc = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(
                new Claim[]{ new Claim(ClaimTypes.Name, user.Username)}
                ),Expires = DateTime.Now.AddSeconds(20),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenkey),SecurityAlgorithms.HmacSha256)
        };
        var token = tokenhandler.CreateToken(tokendesc);
        string finaltoken = tokenhandler.WriteToken(token);
        
        return Ok(finaltoken);
    }
}