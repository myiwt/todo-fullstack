using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace server.Models
{
    public class TodoContext: DbContext
    {

        public DbSet<TodoItem> TodoItems { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder) => dbContextOptionsBuilder.UseSqlite("Data Source=./Data/AppDB.db");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            TodoItem[] todosToSeed = new TodoItem[10];

            string[] statuses = new[]
            {
                "todo", "scheduled", "done"
            };

            for (int i=1; i<=10; i++)
            {
                todosToSeed[i - 1] = new TodoItem
                {
                    Id = i,
                    Name = $"Initial Todo {i}",
                    Location = $"Initial Location {i}",
                    Status = statuses[Random.Shared.Next(statuses.Length)]
                };
            }
            modelBuilder.Entity<TodoItem>().HasData(todosToSeed);
        }
    }
}
