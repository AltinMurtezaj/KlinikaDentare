using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accountants",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emri = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Mbiemri = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Datelindja = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Adresa = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    phone = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accountants", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Doktoret",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emri = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Datelindja = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Kualifikimi = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Specializimi = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Vendbanimi = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NrKontaktues = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doktoret", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Infermjeret",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emri = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Datelindja = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Kualifikimi = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Specializimi = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Vendbanimi = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NrKontaktues = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Infermjeret", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pacientet",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emri = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Mbiemri = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pacientet", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TerminiPacientit",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Orari = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TerminiPacientit", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Accountants");

            migrationBuilder.DropTable(
                name: "Doktoret");

            migrationBuilder.DropTable(
                name: "Infermjeret");

            migrationBuilder.DropTable(
                name: "Pacientet");

            migrationBuilder.DropTable(
                name: "TerminiPacientit");
        }
    }
}
