namespace BoxingStore.Models.Api.Users
{
    using static Data.DataConstants.User;

    using System.ComponentModel.DataAnnotations;

    public class LoginApiModel
    {
        [Required(ErrorMessage = "Employee Number is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
