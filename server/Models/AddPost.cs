namespace server.Models
{
    public class AddPost
    {
        public string PostId { get; set; }
        public int CountFood { get; set; }
        public int Price { get; set; }
        public string Menu { get; set; } = null!;
    }
}