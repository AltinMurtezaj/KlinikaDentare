using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;


namespace Application.Farmaci
{
    public class Details
    {
        public class Query : IRequest<Farmacisti>
        {
            public string Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Farmacisti>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Farmacisti> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Farmacistet.FindAsync(request.Id);
            }

        }

    }
}