using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using AutoMapper;
using MediatR;
using System.Threading;
using Persistence;
using FluentValidation;
using Application.Core;

namespace Application.Nurse
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Infermierja Infermierja { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {

            public CommandValidator()
            {
                RuleFor(x => x.Infermierja).SetValidator(new InfermierjaValidator());
            }
        }


        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var infermierja = await _context.Infermjeret.FindAsync(request.Infermierja.Id);
                
                if(infermierja == null) return null;

                _mapper.Map(request.Infermierja, infermierja);
                var result = await _context.SaveChangesAsync() > 0;
                if(!result) return Result<Unit>.Failure("Failed to update");

                return Result<Unit>.Success(Unit.Value);
            }

        }
    }
}