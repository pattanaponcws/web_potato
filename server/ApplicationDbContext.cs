using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server;

public class ApplicationDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseMySQL("Host=localhost;Port=3306;Database=web_app;User ID=root;Password=root");
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Cart> Carts { get; set; }
    public DbSet<Accept> Accepts { get; set; }
    public DbSet<Menu> Menus { get; set; }
    public DbSet<Post> Posts { get; set; }
    public DbSet<Postmenu> Postmenus { get; set; }
    public DbSet<Restaurant> Restaurants { get; set; }
}