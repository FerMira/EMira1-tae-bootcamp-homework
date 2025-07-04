class UserData {

    userID: number;
    userName: string;

    constructor(userID: number, userName: string) {
        this.userID = userID;
        this.userName = userName;
    }

}

class BookData {

    bookID: number;
    bookName: string;


    constructor(bookID: number, bookName: string) {
        this.bookID = bookID;
        this.bookName = bookName;
    }

}

function fetchBook(bookID: number): Promise<BookData> {

    const books: BookData[] = [
        { bookID: 1, bookName: "Alice in Fantasyland" },
        { bookID: 2, bookName: "Draco Malfoy and the Vanishing Apple" },
        { bookID: 3, bookName: "Game of Crowns" },
        { bookID: 4, bookName: "Duke of the Earrings" },
        { bookID: 5, bookName: "Animal Ranch" }
      ];

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const random = Math.random();

            if (random < 0.2) {
                reject(`Error occurred!`);
            } else {
                const book = books.find(b => b.bookID === bookID);
                if (book) {
                    resolve(book);
                  } else {
                    reject(`Failed to fetch Book`);
                  }
            }
        }, 1500);
    })
}


function fetchUser(userID: number): Promise<UserData> {

    const users: UserData[] = [
        { userID: 1, userName: "Laura Croft" },
        { userID: 2, userName: "Eduard King" },
        { userID: 3, userName: "Queen Bananahamock" },
        { userID: 4, userName: "Poppy Hog" },
        { userID: 5, userName: "Jon Snowstorm" }
      ];

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const random = Math.random();

            if (random < 0.2) {
                reject(`Error occurred!`);
            } else {
                const user = users.find(u => u.userID === userID);
                if (user) {
                    resolve(user);
                  } else {
                    reject(`Failed to fetch User`);
                  }
            }
        }, 1500);
    })
}

async function borrowBook(userID: number, bookID: number) {

    try{
        console.log("Fetching user...");
        console.log("Fetching book...");
        await fetchUser(userID)
        .then(user => console.log("✅ User found: ", user));;
        await fetchBook(bookID)
        .then(book => console.log("✅ Book found: ", book));
    } catch (error) {
        console.error("Failed to fetch information.", error);
    } finally {
        console.log("Borrow operation completed.");
    }

}

borrowBook(2, 5);
