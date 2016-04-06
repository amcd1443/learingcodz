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
    public var hockeyClubs: [Team]
    
    public init(newLeagueName: String, newTeams: [Team]) {
        self.name = newLeagueName
        self.hockeyClubs = newTeams
    }


    public func giveMeTheTeamThatHasTheBestPlayer() -> Team {
        var soFarTeamWithBestPlayer: Team = hockeyClubs[0]

        for nextTeam in hockeyClubs {
            
            let soFarTeamsBestPlayer: Player = soFarTeamWithBestPlayer.giveMeYourBestPlayer()
            let nextTeamsBestPlayer: Player = nextTeam.giveMeYourBestPlayer()
            
            if nextTeamsBestPlayer.rating > soFarTeamsBestPlayer.rating  {
                soFarTeamWithBestPlayer = nextTeam
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
        
        for team in hockeyClubs {
            if team.losses > teamWithMostLoses.losses {
                teamWithMostLoses = team
            }
        }
        return teamWithMostLoses
    }

}