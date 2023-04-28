using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
namespace server.Controllers;

[ApiController]
[Route("/api")]
public class OrderController: ControllerBase
{
    private readonly ILogger<CartController> _logger;
    private readonly ApplicationDbContext _dbContext;
    private readonly IHttpContextAccessor _httpContextAccessor;
    public OrderController(ILogger<CartController> logger, ApplicationDbContext dbContext,IHttpContextAccessor httpContextAccessor)
    {
        _logger = logger;
        _dbContext = dbContext;
        _httpContextAccessor = httpContextAccessor;
    }

    [HttpPost("Accept")]
    public async Task<ActionResult<List<Accept>>> PostAccept(AddAccept add)
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
            var accppt = new Accept();
            var post = this._dbContext.Posts.FirstOrDefault(o=>(o.PostId.ToString()==add.Post));
            accppt.Post = post;
            accppt.User = user;
            _dbContext.Accepts.Add(accppt);
            post.Status = "sending";
            _dbContext.Update(post);
            _dbContext.SaveChanges();
            return Ok();
           
        }
        return Ok("no found token");
    }
    [HttpGet("Accept")]
    public async Task<ActionResult<List<Accept>>> GetAccept()
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
            var accept = this._dbContext.Accepts.Include(x=>x.User).Include(x=>x.Post.User).Include(x=>x.Post.Restaurants).Include(x=>x.Post).Where(x=>x.User==user).ToList();
            return Ok(accept);
        }
        return Ok("no found token");
    }
    
    [HttpDelete("Cancel/{id}")]
    public async Task<ActionResult<List<Accept>>> DeleteCancel(string id)
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
            var accept = this._dbContext.Accepts.Include(x=>x.Post).FirstOrDefault(x => x.AcceptId.ToString() == id);
            var post = this._dbContext.Posts.FirstOrDefault(x => x.PostId == accept.Post.PostId);
            _dbContext.Remove(accept);
            post.Status = "use";
            _dbContext.Update(post);
            _dbContext.SaveChanges();
            return Ok();
        }
        return Ok("no found token");
    }
    [HttpDelete("Complete/{id}")]
    public async Task<ActionResult<List<Accept>>> DeleteComplete(string id)
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
            var accept = this._dbContext.Accepts.Include(x=>x.Post).FirstOrDefault(x => x.AcceptId.ToString() == id);
            var post = this._dbContext.Posts.FirstOrDefault(x => x.PostId == accept.Post.PostId);
            _dbContext.Remove(accept);
            _dbContext.Remove(post);
            _dbContext.SaveChanges();
            return Ok();
        }
        return Ok("no found token");
    }
}