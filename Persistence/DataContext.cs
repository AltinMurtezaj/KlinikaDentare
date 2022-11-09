using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions options) :base(options)
        {
            
        }

        public DbSet<Infermierja> Infermjeret{get;set;}
        public DbSet<Doktori> Doktoret {get;set;}
        public DbSet<Pacienti> Pacientet {get;set;}
        public DbSet<Termini> TerminiPacientit{get;set;}
        public DbSet<Accountant> Accountants {get;set;}
        public object Infermierja { get; set; }
    }
}