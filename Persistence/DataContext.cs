using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace Persistence
{
public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) :base(options)
        {
            
        }

        public DbSet<Infermierja> Infermjeret{get;set;}
        public DbSet<Doktori> Doktoret {get;set;}
        public DbSet<Pacienti> Pacientet {get;set;}
        public DbSet<Termini> TerminiPacientit{get;set;}
        public DbSet<Accountant> Accountants {get;set;}
        public DbSet<Departamenti> Departament{get; set;}
        public DbSet<Eventet> EventiKlinikes {get; set;}
        public DbSet<Laboranti> Laborantet {get; set;}
        public DbSet<Farmacisti> Farmacistet {get; set;}
        public DbSet<Pastruesi> Pastruset {get; set;}
        public DbSet<Terapisti> Terapistet {get; set;}

        public DbSet<PacientiTermini> PacientiTermini { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<PacientiTermini>(x => x.HasKey(aa => new {aa.PacientiId,aa.TerminiId}));

            builder.Entity<PacientiTermini>()
            .HasOne(u => u.Pacienti)
            .WithMany(a => a.Terminet)
            .HasForeignKey(aa => aa.PacientiId);

            builder.Entity<PacientiTermini>()
            .HasOne(u => u.Termini)
            .WithMany(a => a.Pacientet)
            .HasForeignKey(aa => aa.TerminiId);
        }
    }


}