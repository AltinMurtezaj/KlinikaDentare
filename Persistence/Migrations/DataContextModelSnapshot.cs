// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("Domain.AppUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Datelindja")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("Emri")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gjinia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("Mbiemri")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NrKontaktues")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Vendbanimi")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");

                    b.HasDiscriminator<string>("Discriminator").HasValue("AppUser");
                });

            modelBuilder.Entity("Domain.Departamenti", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Emri")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("kapacitetiStafit")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("lokacioni")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Departament");
                });

            modelBuilder.Entity("Domain.Eventet", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("EmriEventit")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FillimiEventit")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MbarimiEventit")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PershkrimiEventit")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("EventiKlinikes");
                });

            modelBuilder.Entity("Domain.PacientiTermini", b =>
                {
                    b.Property<string>("PacientiId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("TerminiId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("IsHost")
                        .HasColumnType("bit");

                    b.HasKey("PacientiId", "TerminiId");

                    b.HasIndex("TerminiId");

                    b.ToTable("PacientiTermini");
                });

            modelBuilder.Entity("Domain.Termini", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("Data")
                        .HasColumnType("datetime2");

                    b.Property<string>("Emri")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Orari")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pershkrimi")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("TerminiPacientit");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("Domain.Accountant", b =>
                {
                    b.HasBaseType("Domain.AppUser");

                    b.Property<string>("Kualifikimi")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Specializimi")
                        .HasColumnType("nvarchar(max)");

                    b.HasDiscriminator().HasValue("Accountant");
                });

            modelBuilder.Entity("Domain.Doktori", b =>
                {
                    b.HasBaseType("Domain.AppUser");

                    b.Property<string>("Kualifikimi")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Doktori_Kualifikimi");

                    b.Property<string>("Specializimi")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Doktori_Specializimi");

                    b.HasDiscriminator().HasValue("Doktori");
                });

            modelBuilder.Entity("Domain.Farmacisti", b =>
                {
                    b.HasBaseType("Domain.AppUser");

                    b.HasDiscriminator().HasValue("Farmacisti");
                });

            modelBuilder.Entity("Domain.Infermierja", b =>
                {
                    b.HasBaseType("Domain.AppUser");

                    b.Property<string>("Kualifikimi")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Infermierja_Kualifikimi");

                    b.Property<string>("Specializimi")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Infermierja_Specializimi");

                    b.HasDiscriminator().HasValue("Infermierja");
                });

            modelBuilder.Entity("Domain.Laboranti", b =>
                {
                    b.HasBaseType("Domain.AppUser");

                    b.Property<string>("Kualifikimi")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Laboranti_Kualifikimi");

                    b.Property<string>("Specializimi")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Laboranti_Specializimi");

                    b.Property<string>("laboratori")
                        .HasColumnType("nvarchar(max)");

                    b.HasDiscriminator().HasValue("Laboranti");
                });

            modelBuilder.Entity("Domain.Pacienti", b =>
                {
                    b.HasBaseType("Domain.AppUser");

                    b.HasDiscriminator().HasValue("Pacienti");
                });

            modelBuilder.Entity("Domain.Pastruesi", b =>
                {
                    b.HasBaseType("Domain.AppUser");

                    b.HasDiscriminator().HasValue("Pastruesi");
                });

            modelBuilder.Entity("Domain.Terapisti", b =>
                {
                    b.HasBaseType("Domain.AppUser");

                    b.HasDiscriminator().HasValue("Terapisti");
                });

            modelBuilder.Entity("Domain.PacientiTermini", b =>
                {
                    b.HasOne("Domain.Pacienti", "Pacienti")
                        .WithMany("Terminet")
                        .HasForeignKey("PacientiId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Termini", "Termini")
                        .WithMany("Pacientet")
                        .HasForeignKey("TerminiId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pacienti");

                    b.Navigation("Termini");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Domain.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Domain.Termini", b =>
                {
                    b.Navigation("Pacientet");
                });

            modelBuilder.Entity("Domain.Pacienti", b =>
                {
                    b.Navigation("Terminet");
                });
#pragma warning restore 612, 618
        }
    }
}
