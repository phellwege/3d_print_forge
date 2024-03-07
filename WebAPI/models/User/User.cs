namespace WebAPI.Models.User
{
    public class User
    {
    public int Id { get; set; }
    public string Username { get; set; }
    public string Bio { get; set; }
    public string DefaultUserAvatar { get; set; }
    public bool StoreOwnership { get; set; }
    public Address Address { get; set; }
    public Reviews Reviews { get; set; }
    }
}