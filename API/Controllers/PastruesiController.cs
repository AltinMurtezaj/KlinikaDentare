using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Pastrues;
using System.Threading;

namespace API.Controllers
{
    public class PastruesiController : BaseApiController
    {
        

        [HttpGet]
        public async Task<ActionResult<List<Pastruesi>>> GetPastruesi()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Pastruesi>> GetPastruesi(int id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]

        public async Task<IActionResult> CreatePastruesi(Pastruesi pastruesi)
        {
            return Ok(await Mediator.Send(new Create.Command {Pastruesi = pastruesi}));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditPastruesi(string id, Pastruesi pastruesi)
        {
            pastruesi.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Pastruesi = pastruesi}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLaboranti(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}