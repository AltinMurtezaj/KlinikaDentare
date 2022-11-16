using Domain;
using FluentValidation;

namespace Application.Nurse
{
    public class InfermierjaValidator : AbstractValidator<Infermierja>
    {
        public InfermierjaValidator()
        {
            RuleFor(x=> x.Emri).NotEmpty();
            RuleFor(x=> x.Datelindja).NotEmpty();
            RuleFor(x=> x.Kualifikimi).NotEmpty();
            RuleFor(x=> x.Specializimi).NotEmpty();
            RuleFor(x=> x.Vendbanimi).NotEmpty();
            RuleFor(x=> x.NrKontaktues).NotEmpty();
        }
    }
}