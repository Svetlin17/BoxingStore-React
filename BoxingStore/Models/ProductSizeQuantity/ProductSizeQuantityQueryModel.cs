namespace BoxingStore.Models
{
    using BoxingStore.Data.Models;
    using BoxingStore.Data.Models.Enums;
    using System.Collections.Generic;

    public class ProductSizeQuantityQueryModel
    {
        public int Id { get; set; }

        public int ProductId { get; set; }

        public ProductSize Size { get; set; }

        public int Quantity { get; set; }
    }
}
