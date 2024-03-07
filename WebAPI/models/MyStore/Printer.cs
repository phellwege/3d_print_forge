namespace WebAPI.Models.MyStore
{
    public class Printer
    {
    public bool HasPrinter { get; set; }
    public bool CustomPrints { get; set; }
    public bool[] SlaPrinterInUseStatus { get; set; }
    public bool[] FdmPrinterInUseStatus { get; set; }
    public int SlaPrinter { get; set; }
    public int FdmPrinter { get; set; }
    }
}