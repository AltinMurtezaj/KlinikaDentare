using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.AccountantFolder;
using System.Threading;

namespace API.Controllers
{
    public class AccountantController : BaseApiController
    {
        

        [HttpGet]
        public async Task<ActionResult<List<Accountant>>> GetAccountant()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Accountant>> GetAccountant(int id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]

        public async Task<IActionResult> CreateAccountant(Accountant accountant)
        {
            return Ok(await Mediator.Send(new Create.Command {Accountant = accountant}));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditAccountant(int id, Accountant accountant)
        {
            accountant.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Accountant = accountant}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccountant(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}