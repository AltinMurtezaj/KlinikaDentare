using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;


namespace Application.Department
{
    public class Details
    {
        public class Query : IRequest<Departamenti>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Departamenti>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Departamenti> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Departament.FindAsync(request.Id);
            }

        }

    }
}