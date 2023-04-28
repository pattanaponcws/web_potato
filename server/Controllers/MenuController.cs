using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Controllers;

[ApiController]
[Route("/api")]

public class MenuController : ControllerBase
{
    private readonly ILogger<MenuController> _logger;
    private readonly ApplicationDbContext _dbContext;

    public MenuController(ILogger<MenuController> logger, ApplicationDbContext dbContext)
    {
        _logger = logger;
        _dbContext = dbContext;
    }

    [HttpGet("menus")]
    public async Task<ActionResult<List<Menu>>> GetMenu()
    {
        return await _dbContext.Menus.Include(r => r.Restaurants).ToListAsync();

    }

    [HttpGet("menus/{id}")]
    public async Task<ActionResult<Menu?>> GetMenuById(Guid id)
    {
        return await _dbContext.Menus.Include(r => r.Restaurants).FirstOrDefaultAsync(m => m.MenuId == id);
    }

    [HttpGet("menus/rest/{RestId}")]
    public async Task<ActionResult<List<Menu>>> GetMenuByRestId(Guid RestId)
    {
        return await _dbContext.Menus.Where(o=>o.Restaurants.RestId == RestId).Include(r => r.Restaurants).ToListAsync();
    }
}