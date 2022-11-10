using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;


namespace Application.AccountFolder
{
    public class Details
    {
        public class Query : IRequest<Account>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Account>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Account> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.AccountDetails.FindAsync(request.Id);
            }

        }

    }
}