using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Farmaci;
using System.Threading;

namespace API.Controllers
{
    public class FarmacistiController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Farmacisti>>> GetFarmacisti()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Farmacisti>> GetFarmacisti(string id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]

        public async Task<IActionResult> CreateFarmacisti(Farmacisti farmacisti)
        {
            return Ok(await Mediator.Send(new Create.Command {Farmacisti = farmacisti}));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditFarmacisti(string id, Farmacisti farmacisti)
        {
            farmacisti.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Farmacisti = farmacisti}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFarmacisti(string id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}