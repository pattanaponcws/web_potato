using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class db12 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Point",
                table: "Users");

            migrationBuilder.AddColumn<string>(
                name: "Displayname",
                table: "Users",
                type: "longtext",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Displayname",
                table: "Users");

            migrationBuilder.AddColumn<int>(
                name: "Point",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
