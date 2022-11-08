using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class InfermierjaController : BaseApiController
    {
        private readonly DataContext _context;
        public InfermierjaController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Infermierja>>> GetInfermierja()
        {
            return await _context.Infermjeret.ToListAsync();
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Infermierja>> GetInfermierja(int Id)
        {
            return await _context.Infermjeret.FindAsync(Id);
        }
    }
}