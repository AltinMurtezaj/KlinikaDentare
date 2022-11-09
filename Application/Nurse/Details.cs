using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;


namespace Application.Nurse
{
    public class Details
    {
        public class Query : IRequest<Infermierja>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Infermierja>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Infermierja> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Infermjeret.FindAsync(request.Id);
            }

        }

    }
}