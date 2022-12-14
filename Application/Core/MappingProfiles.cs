using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Infermierja, Infermierja>();
            CreateMap<Doktori, Doktori>();
            CreateMap<Termini, Termini>();
            CreateMap<Laboranti, Laboranti>();
            CreateMap<Infermierja, Infermierja>();
            CreateMap<Departamenti, Departamenti>();
            CreateMap<Pacienti, Pacienti>();     
            
        }
    }
}