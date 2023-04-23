using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Policy;

namespace server.Models;

public class Menu
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid MenuId { get; set; }
    public string? MenuFood { get; set; }
    public string? PriceFood { get; set; }
    public string? MenuPic { get; set; }
    public Restaurant Restaurants { get; set; } = null!;
}