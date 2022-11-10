using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.AccountFolder;
using System.Threading;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        

        [HttpGet]
        public async Task<ActionResult<List<Account>>> GetAccount()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Account>> GetAccount(int id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]

        public async Task<IActionResult> CreateAccount(Account account)
        {
            return Ok(await Mediator.Send(new Create.Command {Account = account}));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditAccount(int id, Account account)
        {
            account.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Account = account}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccount(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}