using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class db3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "RestaurantsRestId",
                table: "Posts",
                type: "char(36)",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Posts_RestaurantsRestId",
                table: "Posts",
                column: "RestaurantsRestId");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Restaurants_RestaurantsRestId",
                table: "Posts",
                column: "RestaurantsRestId",
                principalTable: "Restaurants",
                principalColumn: "RestId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Restaurants_RestaurantsRestId",
                table: "Posts");

            migrationBuilder.DropIndex(
                name: "IX_Posts_RestaurantsRestId",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "RestaurantsRestId",
                table: "Posts");
        }
    }
}
