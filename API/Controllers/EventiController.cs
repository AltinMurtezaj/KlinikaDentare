using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Eventi;
using System.Threading;

namespace API.Controllers
{
    public class EventiController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Eventet>>> GetEventi()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Eventet>> GetEventi(int id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]

        public async Task<IActionResult> CreateEventet(Eventet eventet)
        {
            return Ok(await Mediator.Send(new Create.Command {Eventet = eventet}));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditEventet(int id, Eventet eventet)
        {
            eventet.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Eventet = eventet}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEventet(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}