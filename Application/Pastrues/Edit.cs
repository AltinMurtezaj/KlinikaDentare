using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using AutoMapper;
using MediatR;
using System.Threading;
using Persistence;

namespace Application.Pastrues
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Pastruesi Pastruesi { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var pastruesi = await _context.Pastruset.FindAsync(request.Pastruesi.Id);

                _mapper.Map(request.Pastruesi, pastruesi);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }

        }
    }
}