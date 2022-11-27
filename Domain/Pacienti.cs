
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Domain
{
    public class Pacienti : AppUser
    {
        public ICollection<PacientiTermini> Terminet { get; set; }= new List<PacientiTermini>();
    }
}