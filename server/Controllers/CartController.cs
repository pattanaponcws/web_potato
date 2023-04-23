using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
namespace server.Controllers;

[ApiController]
[Route("/api")]

public class CartController : ControllerBase
{
    private readonly ILogger<CartController> _logger;
    private readonly ApplicationDbContext _dbContext;
    private readonly IHttpContextAccessor _httpContextAccessor;
    public CartController(ILogger<CartController> logger, ApplicationDbContext dbContext,IHttpContextAccessor httpContextAccessor)
    {
        _logger = logger;
        _dbContext = dbContext;
        _httpContextAccessor = httpContextAccessor;
    }

   
    [HttpPost("AddCart")]
    public async Task<ActionResult<List<Menu>>> AddCart(AddCart add)
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
            var cart = new Cart();
            var menu = this._dbContext.Menus.FirstOrDefault(o=>(o.MenuId.ToString()==add.MenuId));
            cart.Menu = menu;
            cart.User = user;
            cart.Price = add.NumFood * Int32.Parse(menu.PriceFood) ;
            cart.CountFood = add.NumFood;
            _dbContext.Carts.Add(cart);
            _dbContext.SaveChanges();
            return Ok(menu);
        }
        return Ok("no found token");
     }
    [HttpDelete("Remove")]
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
            var cart = this._dbContext.Carts.Include(x =>  x.Menu).Include(x=>x.User).Include(x=>x.Menu.Restaurants).ToList();
            foreach (var item in cart)
            {
                if (item.User == user&&id==item.Menu.Restaurants.RestId.ToString())
                {
                    this._dbContext.Remove(item);
                }
            }

            this._dbContext.SaveChanges();
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
    
    [HttpGet("GetCart")]
    public async Task<ActionResult<List<User>>> GetCart()
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
            var cart = this._dbContext.Carts.Include(x =>  x.Menu).Include(x=>x.User).Include(x=>x.Menu.Restaurants).ToList();
            var Myorder = new List<Cart>();
            foreach (var item in cart)
            {
                if (item.User == user)
                {
                    Myorder.Add(item);
                }
            }
            return Ok(Myorder);
        }
        return Ok("no found token");
    }
}