using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Stafi;
using System.Threading;

namespace API.Controllers
{
    public class StafiTeknikController : BaseApiController
    {
        
        [HttpGet]
        public async Task<ActionResult<List<StafiTeknik>>> GetStafiTeknik()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<StafiTeknik>> GetStafiTeknik(int id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]

        public async Task<IActionResult> CreateStafiTeknik(StafiTeknik stafiTeknik)
        {
            return Ok(await Mediator.Send(new Create.Command {StafiTeknik = stafiTeknik}));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditStafiTeknik(int id, StafiTeknik stafiTeknik)
        {
            stafiTeknik.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{StafiTeknik = stafiTeknik}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStafiTeknik(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}