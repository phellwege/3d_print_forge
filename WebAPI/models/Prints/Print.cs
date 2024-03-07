namespace WebAPI.Models.Prints
{
    public class Print
    {
    public int PrintId { get; set; }
    public int CustomerId { get; set; }
    public int StoreId { get; set; }
    public bool? AcceptOrDecline { get; set; }
    public int? OrderNumber { get; set; }
    public List<string> Files { get; set; }
    public string PrintType { get; set; }
    public DateTime? DatePrintOrdered { get; set; }
    public decimal PrintPrice { get; set; }
    public ShippingAddressDTO Address { get; set; }
    public string PrintNotes { get; set; }
    public string CustomerContact { get; set; }
    }
}