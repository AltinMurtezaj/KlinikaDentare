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

namespace Application.Eventi
{
    public class List
    {
        public class Query : IRequest<List<Eventet>>{}

        public class Handler : IRequestHandler<Query, List<Eventet>>
        {

            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                    _context = context;
            }
            public async Task<List<Eventet>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.EventiKlinikes.ToListAsync(cancellationToken);
            }
            
        }
    }
}