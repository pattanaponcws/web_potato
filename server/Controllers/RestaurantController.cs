using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Controllers;

[ApiController]
[Route("/api")]

public class RestaurantController : ControllerBase
{
    private readonly ILogger<RestaurantController> _logger;
    private readonly ApplicationDbContext _dbContext;

    public RestaurantController(ILogger<RestaurantController> logger, ApplicationDbContext dbContext)
    {
        _logger = logger;
        _dbContext = dbContext;
    }

    
    [HttpGet("restaurants")]
    public async Task<ActionResult<List<Restaurant>>> GetRestaurant()
    {
        return await _dbContext.Restaurants.ToListAsync();

    }
}