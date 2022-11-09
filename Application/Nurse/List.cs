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

namespace Application.Nurse
{
    public class List
    {
        public class Query : IRequest<List<Infermierja>>{}

        public class Handler : IRequestHandler<Query, List<Infermierja>>
        {

            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                    _context = context;
            }
            public async Task<List<Infermierja>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Infermjeret.ToListAsync(cancellationToken);
            }
            
        }
    }
}