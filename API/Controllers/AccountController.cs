using System.Threading.Tasks;
using API.DTOs;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace API.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        public UserManager<AppUser> _userManager { get; }
        private readonly SignInManager<AppUser> _signInManager;
        private readonly TokenService _tokenService;
        public AccountController(UserManager<AppUser> userManager,
    
         SignInManager<AppUser> signInManager, TokenService tokenService)
        {
            _tokenService = tokenService;
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost("login")]

        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user ==null) return Unauthorized();

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if(result.Succeeded)
            {
                return CreateUserObject(user);
            }
            return Unauthorized();

        }
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(AdminRegisterDTO registerDto)
        {
            if(await _userManager.Users.AnyAsync(x=> x.Email == registerDto.Email))
            {
                ModelState.AddModelError("email", "Email taken");
                return ValidationProblem(ModelState);
            }
            
            var user = new Admin
            {
                
                    Emri = registerDto.Emri,  
                    Mbiemri = registerDto.Mbiemri,
                    UserName = registerDto.UserName,
                    Email = registerDto.Email,
                    Datelindja = registerDto.Datelindja,
                    NrKontaktues = registerDto.NrKontaktues,
                    Gjinia = registerDto.Gjinia,
                    Vendbanimi = registerDto.Vendbanimi 
            };
            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if(result.Succeeded)
            {
                return Ok("Admini u shtua me sukses");
            }
            return BadRequest("Problem registring user");
        }
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            return CreateUserObject(user);
        }

        private UserDto CreateUserObject(AppUser user)
        {
            return new UserDto
                {   
                    Id = user.Id,
                    Emri = user.Emri,  
                    Mbiemri = user.Mbiemri,
                    UserName = user.UserName,
                    Email = user.Email,
                    Datelindja = user.Datelindja,
                    NrKontaktues = user.NrKontaktues,
                    Gjinia = user.Gjinia,
                    Vendbanimi = user.Vendbanimi,
                    Token = _tokenService.CreateToken(user),
                    Discriminator = user.Discriminator 
                };
        }
    }
}