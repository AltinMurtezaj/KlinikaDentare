using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class PacientiTermini : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PacientiTermini",
                columns: table => new
                {
                    PacientetId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    TerminetId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PacientiTermini", x => new { x.PacientetId, x.TerminetId });
                    table.ForeignKey(
                        name: "FK_PacientiTermini_AspNetUsers_PacientetId",
                        column: x => x.PacientetId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PacientiTermini_TerminiPacientit_TerminetId",
                        column: x => x.TerminetId,
                        principalTable: "TerminiPacientit",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PacientiTermini_TerminetId",
                table: "PacientiTermini",
                column: "TerminetId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PacientiTermini");
        }
    }
}
