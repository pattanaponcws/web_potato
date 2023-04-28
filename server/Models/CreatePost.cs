namespace server.Models;

public class CreatePost
{
    public String Tel { get; set; }
    public String Address { get; set; }
    public List<AddCart> Foodlist { get; set; } = null!;
    public string Restaurants { get; set; } = null!;

}