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

namespace Application.Department
{
    public class List
    {
        public class Query : IRequest<List<Departamenti>>{}

        public class Handler : IRequestHandler<Query, List<Departamenti>>
        {

            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                    _context = context;
            }
            public async Task<List<Departamenti>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Departament.ToListAsync(cancellationToken);
            }
            
        }
    }
}