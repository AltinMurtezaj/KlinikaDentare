using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Nurse;
using System.Threading;

namespace API.Controllers
{
    public class InfermierjaController : BaseApiController
    {
        

        [HttpGet]
        public async Task<ActionResult<List<Infermierja>>> GetInfermierja()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Infermierja>> GetInfermierja(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]

        public async Task<IActionResult> CreateInfermierja(Infermierja infermierja)
        {
            return Ok(await Mediator.Send(new Create.Command {Infermierja = infermierja}));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditInfermierja(Guid id, Infermierja infermierja)
        {
            infermierja.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Infermierja = infermierja}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInfermierja(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}