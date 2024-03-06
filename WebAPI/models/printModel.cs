public class Print
{
    public int PrintId { get; set; }
    public int CustomerId { get; set; }
    public int StoreId { get; set; }
    public string AcceptOrDecline { get; set; }
    public string OrderNumber { get; set; }
    public string Files { get; set; }
    public string PrintType { get; set; }
    public DateTime DatePrintOrdered { get; set; }
    public decimal PrintPrice { get; set; }
    public Address Address { get; set; }
    public string PrintNotes { get; set; }
    public string CustomerContact { get; set; }
}
