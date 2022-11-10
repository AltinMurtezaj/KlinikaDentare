using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Doctor;
using System.Threading;

namespace API.Controllers
{
    public class DoktoriController : BaseApiController
    {
        

        [HttpGet]
        public async Task<ActionResult<List<Doktori>>> GetDoktori()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Doktori>> GetDoktori(int id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]

        public async Task<IActionResult> CreateDoktori(Doktori doktori)
        {
            return Ok(await Mediator.Send(new Create.Command {Doktori = doktori}));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditDoktori(int id, Doktori doktori)
        {
            doktori.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Doktori = doktori}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDoktori(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}