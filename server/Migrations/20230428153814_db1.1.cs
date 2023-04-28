using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class db11 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AccName",
                table: "Accepts");

            migrationBuilder.DropColumn(
                name: "AccTel",
                table: "Accepts");

            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "Accepts",
                type: "char(36)",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Accepts_UserId",
                table: "Accepts",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Accepts_Users_UserId",
                table: "Accepts",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Accepts_Users_UserId",
                table: "Accepts");

            migrationBuilder.DropIndex(
                name: "IX_Accepts_UserId",
                table: "Accepts");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Accepts");

            migrationBuilder.AddColumn<string>(
                name: "AccName",
                table: "Accepts",
                type: "longtext",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AccTel",
                table: "Accepts",
                type: "longtext",
                nullable: true);
        }
    }
}
