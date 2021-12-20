namespace BoxingStore.Models.Api.Users
{
    using static Data.DataConstants.User;

    using System.ComponentModel.DataAnnotations;

    public class RegisterApiModel
    {
        [Required(ErrorMessage = "Full Name is required")]
        [MaxLength(FullNameMaxLength)]
        public string FullName { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Confirm Password is required")]
        public string ConfirmPassword { get; set; }
    }
}
