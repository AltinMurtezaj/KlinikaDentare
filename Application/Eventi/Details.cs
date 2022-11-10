using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;


namespace Application.Eventi
{
    public class Details
    {
        public class Query : IRequest<Eventet>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Eventet>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Eventet> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.EventiKlinikes.FindAsync(request.Id);
            }

        }

    }
}