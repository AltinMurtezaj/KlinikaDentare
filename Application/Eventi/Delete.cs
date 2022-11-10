using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Eventi
{
    public class Delete
    {
        public class Command: IRequest
        {
            public int Id { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {
            private DataContext _context;

            public Handler (DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var eventi = await _context.EventiKlinikes.FindAsync(request.Id);

                _context.Remove(eventi);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }

        }
    }
}