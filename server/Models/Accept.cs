using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models;

public class Accept
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid AcceptId { get; set; }
    public string? AccName { get; set; }
    public string? AccTel { get; set; }
    public Post Post { get; set; } = null!;
}