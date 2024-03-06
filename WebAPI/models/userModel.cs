public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Bio { get; set; }
    public string DefaultUserAvatar { get; set; }
    public bool StoreOwnership { get; set; }
    public Address Address { get; set; }
    public Review Reviews { get; set; }
}

public class Address
{
    public string Street { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Zip { get; set; }
}

public class Review
{
    public int Rating { get; set; }
    public string ReviewDescription { get; set; }
    public bool Reviewed { get; set; }
}
