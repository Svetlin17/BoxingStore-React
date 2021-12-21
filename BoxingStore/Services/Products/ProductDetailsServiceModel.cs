namespace BoxingStore.Services.Products
{
    using BoxingStore.Data.Models;
    using BoxingStore.Models;
    using System.Collections.Generic;
    
    public class ProductDetailsServiceModel : ProductServiceModel
    {
        public string Description { get; init; }

        public ICollection<ProductSizeQuantityQueryModel> SizeQuantities { get; set; }

        public bool NoteAfterOrder { get; set; }
    }
}
