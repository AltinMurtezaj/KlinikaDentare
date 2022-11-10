using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using Persistence;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using Microsoft.Extensions.Logging;

namespace Application.Farmaci
{
    public class List
    {
        public class Query : IRequest<List<Farmacisti>>{}

        public class Handler : IRequestHandler<Query, List<Farmacisti>>
        {

            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                    _context = context;
            }
            public async Task<List<Farmacisti>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Farmacistet.ToListAsync(cancellationToken);
            }
            
        }
    }
}