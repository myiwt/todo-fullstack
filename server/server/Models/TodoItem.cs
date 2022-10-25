using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class TodoItem
    {
        [Key]
        public long Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; } = "untitled";

        [Required]
        [MaxLength(100)]
        public string Location { get; set; } = "unknown";

        [Required]
        [MaxLength(100)]
        public string Status { get; set; } = "todo";
    }
}
