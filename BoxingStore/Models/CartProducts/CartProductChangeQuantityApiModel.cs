using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BoxingStore.Models.CartProducts
{
    public class CartProductChangeQuantityApiModel
    {
        [Required]
        public int Quantity { get; set; }
    }
}
