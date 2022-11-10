using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;


namespace Application.Stafi
{
    public class Details
    {
        public class Query : IRequest<StafiTeknik>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, StafiTeknik>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<StafiTeknik> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.StafiT.FindAsync(request.Id);
            }

        }

    }
}