using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models;

public class Accept
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid AcceptId { get; set; }
    public User User { get; set; } = null!;
    public Post Post { get; set; } = null!;
}