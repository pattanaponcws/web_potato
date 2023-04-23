
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
namespace server.Controllers;

[ApiController]
[Route("/api")]
public class PostController: ControllerBase
{
    private readonly ILogger<CartController> _logger;
    private readonly ApplicationDbContext _dbContext;
    private readonly IHttpContextAccessor _httpContextAccessor;
    public PostController(ILogger<CartController> logger, ApplicationDbContext dbContext,IHttpContextAccessor httpContextAccessor)
    {
        _logger = logger;
        _dbContext = dbContext;
        _httpContextAccessor = httpContextAccessor;
    }

    [HttpPost("GetPost")]
    public async Task<ActionResult<List<Menu>>> GetPost()
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
            var postAll = new List<Post>();
            var post = this._dbContext.Posts.Include(x=>x.User).Include(x=>x.Restaurants).ToList();
            foreach (var item in post)
            {
                if( item.User==user&&item.Status=="inti")
                postAll.Add(item); 
            }
            return Ok(postAll);
        }
        return Ok("no found token");
    }
    [HttpGet("GetMyPost")]
    public async Task<ActionResult<List<Menu>>> GetMyPost()
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
            var postAll = new List<Post>();
            var post = this._dbContext.Posts.Include(x=>x.User).Include(x=>x.Restaurants).ToList();
            foreach (var item in post)
            {
                if( item.User==user&&item.Status=="use")
                    postAll.Add(item); 
            }
            return Ok(postAll);
        }
        return Ok("no found token");
    }
    [HttpGet("GetMyMenu")]
    public async Task<ActionResult<List<Menu>>> GetMyMenu()
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
            var postAll = new List<Postmenu>();
            var postmenus = this._dbContext.Postmenus.Include(x=>x.Menu).Include(x=>x.User).Include(x=>x.Post).ToList();
            foreach (var item in postmenus)
            {
                if( item.User==user)
                    postAll.Add(item); 
            }
            return Ok(postAll);
        }
        return Ok("no found token");
    }
    [HttpDelete("RemovePost")]
    public IActionResult Remove(string id)
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
            var post = this._dbContext.Posts.FirstOrDefault(o => o.PostId.ToString() == id);
            if (post != null)
            {
                this._dbContext.Posts.Remove(post);
                this._dbContext.SaveChanges();
            }
            return Ok("success");
        }
        return Ok("no found token");
        // var item = this._DBContext.TblUsers.FirstOrDefault(o => o.username == username);
        // if (item != null)
        // {
        //     this._DBContext.Remove(item);
        //     this._DBContext.SaveChanges();
        //     return Ok("success");
        // }
        return Ok("unsuccess");
    }
    [HttpPost("CreatePost")]
    public async Task<ActionResult<List<Menu>>> createPost(CreatePost detail)
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
            var res = this._dbContext.Restaurants.FirstOrDefault(o => o.RestId.ToString()==detail.Restaurants);
            var post = new Post();
            post.User=user;
            post.Status="inti";
            post.Address = detail.Address;
            post.Tel = detail.Tel;
            post.Restaurants = res;
            _dbContext.Posts.Add(post);
            _dbContext.SaveChanges();
            var post_now = this._dbContext.Posts.Include(x=>x.User).FirstOrDefault(o => (o.User.Username == username&&o.Status=="inti"));
            return Ok(post_now.PostId);
        }
        return Ok("no found token");
    }
    [HttpPost("AddPost")]
    public async Task<ActionResult<List<Menu>>> addPost(AddPost add)
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
            var menu = this._dbContext.Menus.FirstOrDefault(o => o.MenuId.ToString() == add.Menu);
            var post = this._dbContext.Posts.FirstOrDefault(o => o.PostId.ToString() == add.PostId);
            var postmenu = new Postmenu();
            postmenu.CountFood= add.CountFood;
            postmenu.Menu = menu;
            postmenu.Post= post;
            postmenu.User = user;
            postmenu.Price = add.Price;
            _dbContext.Postmenus.Add(postmenu);
            post.Status="use";
            _dbContext.Posts.Update(post);
            _dbContext.SaveChanges();
            return Ok(postmenu);
        }
        return Ok("no found token");
     }
}