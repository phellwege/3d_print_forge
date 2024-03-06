public class Store
{
    public int StoreId { get; set; }
    public string Logo { get; set; }
    public string ShopName { get; set; }
    public Address Address { get; set; }
    public string About { get; set; }
    public Printer Printer { get; set; }
    public List<Listing> Listings { get; set; }
}

public class Address
{
    public string Street { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Zip { get; set; }
}

public class Printer
{
    public bool HasPrinter { get; set; }
    public bool CustomPrints { get; set; }
    public bool[] SlaPrinterInUseStatus { get; set; }
    public bool[] FdmPrinterInUseStatus { get; set; }
    public int SlaPrinter { get; set; }
    public int FdmPrinter { get; set; }
}

public class Listing
{
    // Define listing properties
}
