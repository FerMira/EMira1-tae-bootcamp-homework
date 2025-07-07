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
        new BookData(1, "Alice in Fantasyland"),
        new BookData(2, "Draco Malfoy and the Vanishing Apple"),
        new BookData(3, "Game of Crowns"),
        new BookData(4, "Duke of the Earrings"),
        new BookData(5, "Animal Ranch")
      ];

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const random = Math.random();

            if (random < 0.2) {
                reject(`Error occurred!`);
            } else {
                const book = books.find(b => b.bookID === bookID);
                if (book) {
                    console.log("Book: " + book.bookName)
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
        new UserData(1, "Laura Croft"),
        new UserData(2, "Eduard King"),
        new UserData(3, "Queen Bananahamock"),
        new UserData(4, "Poppy Hog"),
        new UserData(5, "Jon Snowstorm")
      ];

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const random = Math.random();

            if (random < 0.2) {
                reject(`Error occurred!`);
            } else {
                const user = users.find(u => u.userID === userID);
                if (user) {
                    console.log("User: " + user.userName)
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
        const user = await fetchUser(userID);
        console.log("Fetching book...");
        const book = await fetchBook(bookID);
        console.log(`User found: ${JSON.stringify(user)}`);
        console.log(`Book found: ${JSON.stringify(book)}`);
    } catch (error) {
        console.error("Failed to fetch information.", error);
    } finally {
        console.log("Borrow operation completed.");
    }

}

borrowBook(2, 5);
borrowBook(1, 4);
borrowBook(3, 3);
