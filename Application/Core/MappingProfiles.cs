using System.Linq;
using Application.Activities;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            // map the updated activity details (Edit.cs handler) to the original activity object in the database
            CreateMap<Activity, Activity>();
            
            // map IsHost.AppUser.UserName from Activity class to HostUsername in the ActivityDto
            CreateMap<Activity, ActivityDto>()
                // d = destination, o = options, s = source, x = expression
                .ForMember(d => d.HostUsername, o => o.MapFrom(s => s.Attendees
                    .FirstOrDefault(x => x.IsHost).AppUser.UserName));
            
            // map DisplayName, UserName & Bio from ActivityAttendee class to the AttendeeDto 
            CreateMap<ActivityAttendee, AttendeeDto>()
                .ForMember(d => d.DisplayName, o => o.MapFrom(s => s.AppUser.DisplayName))
                .ForMember(d => d.Username, o => o.MapFrom(s => s.AppUser.UserName))
                .ForMember(d => d.Bio, o => o.MapFrom(s => s.AppUser.Bio))
                .ForMember(d => d.Image, o => o.MapFrom(s => s.AppUser.Photos
                    .FirstOrDefault(x => x.IsMain).Url));
            
            // map the Photo.IsMain.Url property from the User to the Image property in the Profile
            CreateMap<AppUser, Profiles.Profile>()
                .ForMember(d => d.Image, o => o.MapFrom(s => s.Photos
                    .FirstOrDefault(x => x.IsMain).Url));
        }
    }
}