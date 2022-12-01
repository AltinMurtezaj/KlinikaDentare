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



    }


}