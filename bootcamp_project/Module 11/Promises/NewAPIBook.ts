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
    available: boolean;


    constructor(bookID: number, bookName: string, available: boolean) {
        this.bookID = bookID;
        this.bookName = bookName;
        this.available = available;
    }

}

function fetchBook(bookID: number): Promise<BookData> {

    const books: BookData[] = [
        { bookID: 1, bookName: "Alice in Fantasyland", available: true },
        { bookID: 2, bookName: "Draco Malfoy and the Vanishing Apple", available: true },
        { bookID: 3, bookName: "Game of Crowns", available: true },
        { bookID: 4, bookName: "Duke of the Earrings", available: false },
        { bookID: 5, bookName: "Animal Ranch", available: true }
      ];

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const random = Math.random();

            if (random < 0.1) {
                console.error("Failed fetching book");
                reject (new Error(`Error occurred!`));
            } else {
                const book = books.find(b => b.bookID === bookID);
                if (book) {
                    console.log("Book: " + book.bookName);
                    //book.available = false;
                    resolve(book);

                  } else {
                    console.error("Could not find book.");
                    reject (new Error(`Failed to fetch Book`));
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

            if (random < 0.1) {
                console.error("Failed fetching user");
                reject (new Error(`Error occurred!`));
            } else {
                const user = users.find(u => u.userID === userID);
                if (user) {
                    console.log("User: " + user.userName)
                    resolve(user);
                  } else {
                    console.error("Could not find user");
                    reject (new Error(`Failed to fetch User`));
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

async function borrowMultipleBooks(userID: number, bookIds: number[]) {
    try {
        await fetchUser(userID);
        const bookPromises = bookIds.map(id => fetchBook(id));
        console.log("Book promises");
        console.log(bookPromises);
        const bookList = await Promise.all(bookPromises);
        console.log(bookList);

    } catch (error) {
        console.error("Failed to fetch information.", error);
    } finally {
        console.log("Borrow multiple books operation completed.");
    }

}

 async function checkBooksAvailability(bookIds: number[]) {
    try {
        const bookPromises = bookIds.map(id => fetchBook(id));
        console.log("Book promises");
        console.log(bookPromises);
        const bookList = await Promise.allSettled(bookPromises);
        for (let book of bookList) {
            if (book.status === 'fulfilled' && book.value.available === true) {
                console.log(`Status ${book.status} and available for book ${book.value.bookName}`);
                continue;
            }

            if (book.status === 'fulfilled' && book.value.available === false) {
                console.log(`Status ${book.status} and not-available for book ${book.value.bookName}`);
                continue;
            }

            console.log(`Book rejected. Not able to retrieve availability for book`);

        }

    } catch (error) {
        console.error("Failed to fetch information.", error);
    } finally {
        console.log("Borrow multiple books operation completed.");
    }
 }

 async function findAnyAvailableBook(bookIds: number[]) {
    try {
        const bookPromises = bookIds.map(id => fetchBook(id));
        console.log("Book promises");
        console.log(bookPromises);
        const bookList = await Promise.any(await Promise.all(bookPromises))
        console.log(bookList);

    } catch (error) {
        console.error("No books returned.", error);
    } finally {
        console.log("Borrow multiple books operation completed.");
    }
 }

 async function findFirstRespondingBook(bookIds: number[]) {
    try {
        const bookPromises = bookIds.map(id => fetchBook(id));
        console.log("Book promises");
        console.log(bookPromises);
        const bookList = await Promise.race(await Promise.allSettled(bookPromises))
        console.log(bookList);

    } catch (error) {
        console.error("Failed to fetch information.", error);
    } finally {
        console.log("Borrow multiple books operation completed.");
    }
 }


// Uncomment any of the functions you want to execute.

//borrowBook(2, 5);
//borrowMultipleBooks(2, [1, 2, 4]);
//checkBooksAvailability([1, 2, 4]);
//findAnyAvailableBook([1, 2, 4]);
//findFirstRespondingBook([1, 2, 4]);