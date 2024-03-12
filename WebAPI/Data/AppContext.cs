using Microsoft.EntityFrameworkCore;

public class YourDbContext : DbContext
{
    public YourDbContext(DbContextOptions<YourDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<UserAddress> UserAddresses { get; set; }
    public DbSet<Review> Reviews { get; set; }
    public DbSet<MyStore> MyStores { get; set; }
    public DbSet<StoreAddress> StoreAddresses { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Define foreign key relationships
        modelBuilder.Entity<UserAddress>()
            .HasOne(ua => ua.User)
            .WithMany(u => u.UserAddresses)
            .HasForeignKey(ua => ua.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Review>()
            .HasOne(r => r.User)
            .WithMany(u => u.Reviews)
            .HasForeignKey(r => r.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<StoreAddress>()
            .HasOne(sa => sa.MyStore)
            .WithMany(s => s.StoreAddresses)
            .HasForeignKey(sa => sa.StoreId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}

public class User
{
    public string Id { get; set; }
    public string Username { get; set; }
    public string Bio { get; set; }
    public int DefaultUserAvatarIndex { get; set; }
    public bool StoreOwnership { get; set; }

    public List<UserAddress> UserAddresses { get; set; }
    public List<Review> Reviews { get; set; }
}

public class UserAddress
{
    public int Id { get; set; }
    public string UserId { get; set; }
    public string Street { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Zip { get; set; }

    public User User { get; set; }
}

public class Review
{
    public int Id { get; set; }
    public string UserId { get; set; }
    public decimal Rating { get; set; }
    public string ReviewDescription { get; set; }
    public bool Reviewed { get; set; }

    public User User { get; set; }
}

public class MyStore
{
    public int StoreId { get; set; }
    public string Logo { get; set; }
    public string ShopName { get; set; }
    public string About { get; set; }
    public bool HasPrinter { get; set; }
    public bool CustomPrints { get; set; }
    public byte[] SlaPrinterInUseStatus { get; set; }
    public byte[] FdmPrinterInUseStatus { get; set; }
    public int SlaPrinter { get; set; }
    public int FdmPrinter { get; set; }

    public List<StoreAddress> StoreAddresses { get; set; }
}

public class StoreAddress
{
    public int AddressId { get; set; }
    public int StoreId { get; set; }
    public string Street { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Zip { get; set; }

    public MyStore MyStore { get; set; }
}
