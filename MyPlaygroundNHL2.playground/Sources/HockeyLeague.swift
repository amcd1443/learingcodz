import Foundation

//public class Team {
//    
//    var name: String
//    public var roster: [Player]
//    var location: String
//    var conference: Conference
//    var wins: Int
//    var losses: Int
//    
//    public init(newTeamName: String, newTeamLocation: String, newTeamConference: Conference) {
//        self.name = newTeamName
//        self.location = newTeamLocation
//        self.conference = newTeamConference
//        self.roster = [Player]()
//        self.wins = 0
//        self.losses = 0
//}


public class HockeyLeague {
    public var name: String
    var hockeyClubs: [Team]
    
    public init(newLeagueName: String, newTeams: [Team]) {
        self.name = newLeagueName
        self.hockeyClubs = newTeams
    }


    public func giveMeTheTeamThatHasTheBestPlayer() -> Team {
        var soFarTeamWithBestPlayer: Team = hockeyClubs[0]
        print("strting best team is: \(soFarTeamWithBestPlayer.name)")
        for nextTeam in hockeyClubs {
            
            var soFarTeamsBestPlayer: Player = soFarTeamWithBestPlayer.giveMeYourBestPlayer()
            var nextTeamsBestPlayer: Player = nextTeam.giveMeYourBestPlayer()
            print("is \(nextTeam.name)'s best player better then \(soFarTeamWithBestPlayer.name)'s best player?")

            if nextTeamsBestPlayer.rating > soFarTeamsBestPlayer.rating  {
                soFarTeamWithBestPlayer = nextTeam
                print("yes, so now our team with the best player is \(soFarTeamWithBestPlayer.name)")
            } else {
                print("no, we are sticking with \(soFarTeamWithBestPlayer.name) as our team with the best player")
            }
        }
        return soFarTeamWithBestPlayer
    }
    
    
    
    
    public func giveMeTeamWithHightestRating() -> Team {
        var teamWithHighestRating: Team = hockeyClubs[0]
        for team in hockeyClubs {
            if team.teamRating() > teamWithHighestRating.teamRating() {
               teamWithHighestRating = team
            }
        }
        return teamWithHighestRating
    }
    
    
    public func teamWithWorstRecord() -> Team {
        var teamWithMostLoses: Team = hockeyClubs[0]
        print("starting  team with most losses is: \(teamWithMostLoses.name) with a loss count of: \(teamWithMostLoses.losses)")
        
        

        for team in hockeyClubs {
            print("is the number of loses (\(team.losses) of the next team \(team.name) less then the number of losses(\(teamWithMostLoses.losses)) of \(teamWithMostLoses.name)? ")
            if team.losses > teamWithMostLoses.losses {
        
                teamWithMostLoses = team
                print("this is the new team with most loses\(teamWithMostLoses.name)")
            } else {
                print("no this team is the worst \(teamWithMostLoses.name)")
            }
        }
        return teamWithMostLoses
    }

    
    public func printStandings() {
        
    }

    
    
    
}

