using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Infermierja
    {
        public Guid Id {get;set;}

        public string Emri  {get;set;}
        public DateTime Datelindja {get;set;}
        public string Kualifikimi {get;set;}
        public string Specializimi {get;set;}
        public string Vendbanimi {get;set;}
        public string NrKontaktues {get;set;}
    }
}