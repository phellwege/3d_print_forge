namespace WebAPI.Models.MyStore
{
    public class MyStore
    {
        public int StoreId { get; set; }
        public string Logo { get; set; }
        public string ShopName { get; set; }
        public StoreAddressDTO Address { get; set; }
        public string About { get; set; }
        public Printer Printer { get; set; }
        public List<string> Listings { get; set; }
    }
}