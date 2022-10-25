using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Data.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TodoItems",
                columns: table => new
                {
                    Id = table.Column<long>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Location = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Status = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TodoItems", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "TodoItems",
                columns: new[] { "Id", "Location", "Name", "Status" },
                values: new object[] { 1L, "Initial Location 1", "Initial Todo 1", "scheduled" });

            migrationBuilder.InsertData(
                table: "TodoItems",
                columns: new[] { "Id", "Location", "Name", "Status" },
                values: new object[] { 2L, "Initial Location 2", "Initial Todo 2", "todo" });

            migrationBuilder.InsertData(
                table: "TodoItems",
                columns: new[] { "Id", "Location", "Name", "Status" },
                values: new object[] { 3L, "Initial Location 3", "Initial Todo 3", "scheduled" });

            migrationBuilder.InsertData(
                table: "TodoItems",
                columns: new[] { "Id", "Location", "Name", "Status" },
                values: new object[] { 4L, "Initial Location 4", "Initial Todo 4", "done" });

            migrationBuilder.InsertData(
                table: "TodoItems",
                columns: new[] { "Id", "Location", "Name", "Status" },
                values: new object[] { 5L, "Initial Location 5", "Initial Todo 5", "todo" });

            migrationBuilder.InsertData(
                table: "TodoItems",
                columns: new[] { "Id", "Location", "Name", "Status" },
                values: new object[] { 6L, "Initial Location 6", "Initial Todo 6", "todo" });

            migrationBuilder.InsertData(
                table: "TodoItems",
                columns: new[] { "Id", "Location", "Name", "Status" },
                values: new object[] { 7L, "Initial Location 7", "Initial Todo 7", "todo" });

            migrationBuilder.InsertData(
                table: "TodoItems",
                columns: new[] { "Id", "Location", "Name", "Status" },
                values: new object[] { 8L, "Initial Location 8", "Initial Todo 8", "scheduled" });

            migrationBuilder.InsertData(
                table: "TodoItems",
                columns: new[] { "Id", "Location", "Name", "Status" },
                values: new object[] { 9L, "Initial Location 9", "Initial Todo 9", "todo" });

            migrationBuilder.InsertData(
                table: "TodoItems",
                columns: new[] { "Id", "Location", "Name", "Status" },
                values: new object[] { 10L, "Initial Location 10", "Initial Todo 10", "todo" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TodoItems");
        }
    }
}
