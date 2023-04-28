
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
    
    private readonly ApplicationDbContext _dbContext;
    private readonly IHttpContextAccessor _httpContextAccessor;
    public PostController( ApplicationDbContext dbContext,IHttpContextAccessor httpContextAccessor)
    {
        
        _dbContext = dbContext;
        _httpContextAccessor = httpContextAccessor;
    }

    [HttpGet("Post")]
    public async Task<ActionResult<List<Post>>> GetPost()
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
                 if( item.User!=user&&item.Status=="use")
                 postAll.Add(item); 
             }
             return Ok(postAll);
        }
        return Ok("no found token");
    }
    [HttpGet("Postmenu")]
    public async Task<ActionResult<List<Post>>> GetPostmenu()
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
            var PostmenuAll = new List<Postmenu>();
            var post = this._dbContext.Postmenus.Include(x=>x.User).Include(x=>x.Post).Include(x=>x.Menu).ToList();
            foreach (var item in post)
            {
                if( item.User!=user)
                    PostmenuAll.Add(item); 
            }
            return Ok(PostmenuAll);
        }
        return Ok("no found token");
    }
    [HttpGet("MyPostmenu")]
    public async Task<ActionResult<List<Post>>> GetMyPostmenu()
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
            var PostmenuAll = new List<Postmenu>();
            var post = this._dbContext.Postmenus.Include(x=>x.User).Include(x=>x.Post).Include(x=>x.Menu).ToList();
            foreach (var item in post)
            {
                if( item.User==user)
                    PostmenuAll.Add(item); 
            }
            return Ok(PostmenuAll);
        }
        return Ok("no found token");
    }
    [HttpGet("MyPost")]
    public async Task<ActionResult<List<Post>>> GetMyPost()
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
    
    [HttpDelete("Post/{id}")]
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
        
    }
    [HttpPost("Post")]
    public async Task<ActionResult<List<Post>>> createPost(CreatePost detail)
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
            
            var user = this._dbContext.Users.FirstOrDefault(o => o.Username == (string?)username)!;
            var res = this._dbContext.Restaurants.FirstOrDefault(o => o.RestId.ToString()==detail.Restaurants)!;
            var post = new Post();
            post.User=user;
            post.Status="inti";
            post.Address = detail.Address;
            post.Tel = detail.Tel;
            post.Restaurants = res;
            _dbContext.Posts.Add(post);
            _dbContext.SaveChanges();
            var postNow = this._dbContext.Posts.Include(x=>x.User).FirstOrDefault(o => (o.User.Username == (string?)username&&o.Status=="inti"&&o.Restaurants.RestId.ToString()==detail.Restaurants))!;
            for (int i = 0; i < detail.Foodlist.Count; i++)
            {
                var postmenu = new Postmenu();
                var menu = this._dbContext.Menus.FirstOrDefault(o => o.MenuId.ToString()==detail.Foodlist[i].MenuId)!;
                postmenu.CountFood = detail.Foodlist[i].NumFood;
                postmenu.Menu = menu;
                postmenu.Post = postNow;
                postmenu.User = user;
                postmenu.Price = Int32.Parse(menu.PriceFood!) * detail.Foodlist[i].NumFood;
                _dbContext.Postmenus.Add(postmenu);
            }
            postNow.Status = "use"; 
            _dbContext.Posts.Update(post);
            _dbContext.SaveChanges();
            return Ok(detail.Foodlist.Count);
        }
        return Ok("no found token");
    }
    
}