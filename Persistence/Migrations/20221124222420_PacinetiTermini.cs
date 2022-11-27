using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class PacinetiTermini : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PacientiTermini_AspNetUsers_PacientetId",
                table: "PacientiTermini");

            migrationBuilder.DropForeignKey(
                name: "FK_PacientiTermini_TerminiPacientit_TerminetId",
                table: "PacientiTermini");

            migrationBuilder.RenameColumn(
                name: "TerminetId",
                table: "PacientiTermini",
                newName: "TerminiId");

            migrationBuilder.RenameColumn(
                name: "PacientetId",
                table: "PacientiTermini",
                newName: "PacientiId");

            migrationBuilder.RenameIndex(
                name: "IX_PacientiTermini_TerminetId",
                table: "PacientiTermini",
                newName: "IX_PacientiTermini_TerminiId");

            migrationBuilder.AddColumn<bool>(
                name: "IsHost",
                table: "PacientiTermini",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddForeignKey(
                name: "FK_PacientiTermini_AspNetUsers_PacientiId",
                table: "PacientiTermini",
                column: "PacientiId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PacientiTermini_TerminiPacientit_TerminiId",
                table: "PacientiTermini",
                column: "TerminiId",
                principalTable: "TerminiPacientit",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PacientiTermini_AspNetUsers_PacientiId",
                table: "PacientiTermini");

            migrationBuilder.DropForeignKey(
                name: "FK_PacientiTermini_TerminiPacientit_TerminiId",
                table: "PacientiTermini");

            migrationBuilder.DropColumn(
                name: "IsHost",
                table: "PacientiTermini");

            migrationBuilder.RenameColumn(
                name: "TerminiId",
                table: "PacientiTermini",
                newName: "TerminetId");

            migrationBuilder.RenameColumn(
                name: "PacientiId",
                table: "PacientiTermini",
                newName: "PacientetId");

            migrationBuilder.RenameIndex(
                name: "IX_PacientiTermini_TerminiId",
                table: "PacientiTermini",
                newName: "IX_PacientiTermini_TerminetId");

            migrationBuilder.AddForeignKey(
                name: "FK_PacientiTermini_AspNetUsers_PacientetId",
                table: "PacientiTermini",
                column: "PacientetId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PacientiTermini_TerminiPacientit_TerminetId",
                table: "PacientiTermini",
                column: "TerminetId",
                principalTable: "TerminiPacientit",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
