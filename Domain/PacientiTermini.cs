using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class PacientiTermini
    {
        public string PacientiId { get; set; }
        public Pacienti Pacienti { get; set; }
        public String TerminiId { get; set; }
        public Termini Termini { get; set; }
        public bool IsHost { get; set; }
    }
}