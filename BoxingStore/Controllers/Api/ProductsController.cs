using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BoxingStore.Data;
using BoxingStore.Data.Models;
using BoxingStore.Services.Products;
using Microsoft.AspNetCore.Authorization;

using static BoxingStore.Data.DataConstants;
using BoxingStore.Models;

namespace BoxingStore.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly BoxingStoreDbContext _context;
        private readonly IProductService _products;

        public ProductsController(BoxingStoreDbContext context, IProductService products)
        {
            _context = context;
            _products = products;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDetailsServiceModel>> GetProduct(int id)
        {
            var productExists = await _context.Products.FindAsync(id);

            if (productExists == null)
            {
                return NotFound();
            }

            var product = _products.FindById(id);

            var productCategory = _products.ProductCategory(product.CategoryName);

            ICollection<ProductSizeQuantityQueryModel> allSizesForCurrentProduct = _products.ProductSizeQuantity(id);

            var productData = new ProductDetailsServiceModel
            {
                Id = product.Id,
                Brand = product.Brand,
                Name = product.Name,
                ImageUrl = product.ImageUrl,
                Description = product.Description,
                Price = product.Price,
                CategoryId = productCategory.Id,
                CategoryName = product.CategoryName,
                SizeQuantities = allSizesForCurrentProduct
            };

            return productData;
        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
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

        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(ProductFormServiceModel product)
        {
            var productData = new Product
            {
                Brand = product.Brand,
                Name = product.Name,
                //ConvertedName = convertedName,
                Price = product.Price,
                Description = product.Description,
                ImageUrl = product.ImageUrl,
                CategoryId = product.CategoryId
            };

            _context.Products.Add(productData);
            await _context.SaveChangesAsync();

            _products.AddQuantities(product, ProductQuantityMin, productData.Id);

            return CreatedAtAction("GetProduct", new { id = productData.Id }, productData);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            ICollection<ProductSizeQuantityQueryModel> allSizesForCurrentProduct = _products.ProductSizeQuantity(product.Id);

            foreach (var psq in allSizesForCurrentProduct)
            {
                _products.RemoveProductSizeQuantities(psq);
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}
