using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;


namespace Application.Pastrues
{
    public class Details
    {
        public class Query : IRequest<Pastruesi>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Pastruesi>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Pastruesi> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Pastruset.FindAsync(request.Id);
            }

        }

    }
}