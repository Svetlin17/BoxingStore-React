using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BoxingStore.Data;
using BoxingStore.Data.Models;
using BoxingStore.Models.CartProducts;
using BoxingStore.Data.Models.Enums;

namespace BoxingStore.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartProductsController : ControllerBase
    {
        private readonly BoxingStoreDbContext _context;

        public CartProductsController(BoxingStoreDbContext context)
        {
            _context = context;
        }

        // GET: api/CartProducts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CartProduct>>> GetCartProducts()
        {
            return await _context.CartProducts.ToListAsync();
        }

        // GET: api/CartProducts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CartProduct>> GetCartProduct(int id)
        {
            var cartProduct = await _context.CartProducts.FindAsync(id);

            if (cartProduct == null)
            {
                return NotFound();
            }

            return cartProduct;
        }

        // PUT: api/CartProducts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> ChangeQuantity(int id, CartProductChangeQuantityApiModel cpModel)
        {
            var cartProduct = await _context.CartProducts.FindAsync(id);

            if (cartProduct == null)
            {
                return BadRequest();
            }

            try
            {
                cartProduct.Quantity = cpModel.Quantity;
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CartProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CartProducts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CartProduct>> PostCartProduct(CartProductApiModel cp)
        {
            var cartProduct = new CartProduct
            {
                CartId = cp.CartId,
                ProductId = cp.ProductId,
                Quantity = cp.Quantity,
                Size = (ProductSize)cp.Size
            };

            _context.CartProducts.Add(cartProduct);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCartProduct", new { id = cartProduct.Id }, cartProduct);
        }

        // DELETE: api/CartProducts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCartProduct(int id)
        {
            var cartProduct = await _context.CartProducts.FindAsync(id);
            if (cartProduct == null)
            {
                return NotFound();
            }

            _context.CartProducts.Remove(cartProduct);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CartProductExists(int id)
        {
            return _context.CartProducts.Any(e => e.Id == id);
        }
    }
}
