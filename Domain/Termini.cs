using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Termini
    {
        public string Id {get;set;}
        public string Emri {get; set;}
        public string Orari {get;set;}
        public DateTime Data {get;set;}
        public string Pershkrimi {get; set;} 
        public ICollection<PacientiTermini> Pacientet { get; set; }= new List<PacientiTermini>();
    }
}