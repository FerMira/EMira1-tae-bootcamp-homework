class VideoGame {

    // Static attributes
    static availableGames: VideoGame[] = [];
    static soldOutGames: VideoGame[] = [];
    static totalMoneyEarned: number;


    // Instance attributes
    title: string;
    developer: string;
    availableCopies: number;
    price: number;
    copiesSold: number;

    constructor(title: string, developer: string, availableCopies: number, price: number, copiesSold: number) {
        this.title = title;
        this.developer = developer;
        this.availableCopies = availableCopies;
        this.price = price;
        this.copiesSold = copiesSold;

        VideoGame.availableGames.push(this);
    }

    // Instance methods
    isAvailable(copiesSold: number): boolean {
    return this.availableCopies >= copiesSold;
    }

    sell(numberOfCopies:number = 1): number {

        try {
            if ( this.isAvailable(numberOfCopies) ) {
                this.availableCopies -= numberOfCopies;
                VideoGame.totalMoneyEarned += this.price*numberOfCopies;

                if ( this.availableCopies === 0 ) {
                    VideoGame.soldOutGames.push(this);
                    VideoGame.availableGames = VideoGame.availableGames.filter(game => game != this);
                }
            } else {
                throw new Error("Game is not available");
            }
            console.log("Video game being sold is: " + this.title);
            return this.price*numberOfCopies;

        } catch (error) {

            console.error("Not available copies for this game:", error.message);
            return 0;

            }

    }

    static getTotalSold(): number {
        return VideoGame.totalMoneyEarned;
    }

    static sellGames(games: VideoGame[], copies?: number[]): number {
        let totalPrice = 0;

        try {
            for (let i = 0; i < games.length; i++) {
                const game = games[i];
                const numberOfCopies = copies && copies[i] ? copies[i] : 1; // Default to 1 if copies is not provided
                totalPrice += game.sell(numberOfCopies);
            }

            return totalPrice;
        } catch (error) {
            console.error("Game is not available.", error.message);
            return totalPrice;
        } finally {
        console.log("Games processed successfully");
        }
    }
}
