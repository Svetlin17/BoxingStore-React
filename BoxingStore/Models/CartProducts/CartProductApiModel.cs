using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BoxingStore.Models.CartProducts
{
    public class CartProductApiModel
    {
        [Required]
        public int CartId { get; set; }

        [Required]
        public int ProductId { get; set; }

        [Required]
        public int Size { get; set; }

        [Required]
        public int Quantity { get; set; }
    }
}
