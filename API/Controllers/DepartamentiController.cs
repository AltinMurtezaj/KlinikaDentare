using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Department;
using System.Threading;

namespace API.Controllers
{
    public class DepartamentiController : BaseApiController
    {
        

        [HttpGet]
        public async Task<ActionResult<List<Departamenti>>> GetDepartamenti()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Departamenti>> GetDepartamenti(int id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]

        public async Task<IActionResult> CreateDepartamenti(Departamenti departamenti)
        {
            return Ok(await Mediator.Send(new Create.Command {Departamenti = departamenti}));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditDepartamenti(int id, Departamenti departamenti)
        {
            departamenti.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Departamenti = departamenti}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDepartamenti(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}