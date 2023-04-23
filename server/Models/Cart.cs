using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace server.Models;

public class Cart
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid CartId { get; set; }
    public int CountFood { get; set; }
    public int Price { get; set; }
    public User User { get; set; } = null!;
    public Menu Menu { get; set; } = null!;
}
